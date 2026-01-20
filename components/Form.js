'use client'
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Loader2 } from "lucide-react"
import { Footer } from "./Footer"
import { useState } from "react"
import { addDoc, collection, doc, getDoc, getDocs, increment, limit, query, updateDoc, where } from "firebase/firestore"
import { db } from "@/config"
export const Form = ({ event }) => {
  const [name,setName] = useState('')
  const [registerNumber,setRegisterNumber] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [email,setEmail] = useState('')
  const [department,setDepartment] = useState('')
  const [year,setYear] = useState('')
  const [error,setError] = useState('')
  const [showErrorBox,setShowErrorBox] = useState(false)
  const [loading,setLoading] = useState(false)
  const validateCredentials = () => {
    if(!name.trim()){
      setError('Name field is mandatory!')
      setShowErrorBox(true)
      return false
    }
    if(!registerNumber.trim()){
      setError('Register Number field is mandatory!')
      setShowErrorBox(true)
      return false
    }
    if(!registerNumber.match(/^\d{9}$/)){
      setError('Invalid Register Number!')
      setShowErrorBox(true)
      return false
    }
    if(!phoneNumber.trim()){
      setError('Phone Number field is mandatory!')
      setShowErrorBox(true)
      return false
    }
    if(!/^\d{5} \d{5}$/.test(phoneNumber)){
      setError('Invalid Phone Number (Format: 98765 43210)!')
      setShowErrorBox(true)
      return false
    }
    if(!email.trim()){
      setError('Email ID field is mandatory!')
      setShowErrorBox(true)
      return false
    }
    if(!/^\d{9}@sastra\.ac\.in$/.test(email)){
      setError('Invalid Email ID (Use only sastra mail ID)!')
      setShowErrorBox(true)
      return false
    }
    if(registerNumber !== email.substring(0,9)){
      setError('Given register number does not match email ID!')
      setShowErrorBox(true)
      return false
    }
    if(!department.trim()){
      setError('Department Field is mandatory!')
      setShowErrorBox(true)
      return false
    }
    if(!year.trim()){
      setError('Year field is mandatory')
      setShowErrorBox(true)
      return false
    }
    if(!['1','2','3','4','5'].includes(year)){
      setError('Invalid entry for year!')
      setShowErrorBox(true)
      return false
    }
    return true
  }
  const formatEventTime = (timeStr) => {
    if(!timeStr){
      return ""
    }
    return new Date(timeStr).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
  }
  const checkIfAlreadyRegisteredForOtherEvent = async () => {
    try{
      const collectionRef = collection(db, "submissions")
      const q = query(collectionRef, where("registerNumber", "==", `${registerNumber}`))
      const querySnapshot = await getDocs(q)
      return (!querySnapshot.empty)
    }
    catch(error){
      setError(error.message || "An error occured!")
      setShowErrorBox(true)
    }
  }
  const checkIfAlreadyRegistered = async () => {
    try{
      const collectionRef = collection(db, "submissions")
      const q = query(collectionRef, where("generatedToken", "==", `${event.id}_${registerNumber}`))
      const querySnapshot = await getDocs(q)
      return (!querySnapshot.empty)
    }
    catch(error){
      setError(error.message || "An error occured")
      setShowErrorBox(true)
      return false
    }
  }
  const handleSubmit = async (e) => {
    try{
      e.preventDefault()
      if(event.limit <= 0){
        setError("Sorry! The event is now fully booked!")
        setShowErrorBox(true)
        return
      }
      setLoading(true)
      if(!validateCredentials()){
        return
      }
      const alreadyRegistered = await checkIfAlreadyRegistered()
      if(alreadyRegistered){
        setError('You have already registered for this event!')
        setShowErrorBox(true)
        return
      }
      const alreadyRegisteredForOtherEvent = await checkIfAlreadyRegisteredForOtherEvent()
      if(alreadyRegisteredForOtherEvent){
        setError('You are allowed to register for only one workshop!')
        setShowErrorBox(true)
        return
      }
      const docRef = await addDoc(collection(db, "submissions"), {
        name,
        registerNumber,
        phoneNumber,
        email,
        department,
        year,
        submittedAt: new Date(),
        eventId: event.id,
        eventName: event.name,
        generatedToken: `${event.id}_${registerNumber}`
      })
      await updateDoc(doc(db, "events", event.id), {
        limit: increment(-1)
      })
      setName('')
      setRegisterNumber('')
      setPhoneNumber('')
      setEmail('')
      setDepartment('')
      setYear('')
      setShowErrorBox(true)
      setError('Registration Successful!')
    }
    catch(error){
      setError(error.message || "An error occured!")
      setShowErrorBox(true)
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <div className="flex flex-col bg-[#0b0f1a] min-h-screen">
      <div className="flex flex-col mb-10 w-full max-w-2xl mx-auto">
        <div className="relative w-full">
          <Image src={"/images.jpeg"} width={800} height={400} alt="Photo" className="w-full h-auto mx-auto mt-7 object-cover rounded-xl md:rounded-b-3xl" />
          <div className="flex flex-col bottom-4 absolute left-4 right-4">
            <div className="rounded-2xl bg-yellow-300 text-black font-bold text-[10px] text-center w-fit px-2 ">{event.cluster}</div>
            <div className="text-3xl font-bold text-white break-words">{event.name}</div>
            <div className="flex flex-wrap mt-1 gap-x-4 gap-y-1">
              <div className="flex flex-row items-center text-white gap-x-1">
                <Clock className="w-4 h-4" color="white" />
                <div className="text-xs sm:text-sm">{formatEventTime(event.datefrom)}-{formatEventTime(event.dateto)}</div>
              </div>
              <div className="flex flex-row items-center text-white gap-x-1">
                <MapPin className="w-4 h-4" color="white" />
                <div className="text-xs sm:text-sm">{event.venue}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-1 mx-auto mt-10">
          <div className="text-white text-2xl border-b-[1px] py-2 font-semibold border-yellow-400">Description</div>
        </div>
        <div className="text-sm text-gray-400 text-center w-[90%] mx-auto mt-5">{event.description}</div>
        <div className="border-slate-700 border-1 rounded-2xl text-white mt-10 w-[90%] mx-auto px-4 py-6 bg-[#0f172a]">
          <div className="text-center text-2xl font-bold mb-5">What To Expect?</div>
          <div className="flex flex-col items-start max-w-md mx-auto gap-y-5">
          {
            event.whatToExpect?.length > 0 && event.whatToExpect.map((point,index) => {
              return(
                <div className="flex flex-row items-start gap-x-3" key={index}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" color="yellow" />
                  <div className="text-xs sm:text-sm">{point}</div>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="text-white text-2xl border-b-[1px] py-2 font-semibold border-yellow-400 w-fit text-center mx-auto">Register Now</div>
          <form onSubmit={handleSubmit} className="flex flex-col w-[90%] sm:w-[80%] mx-auto mt-5">
            <div className="flex flex-col gap-y-2">
              <p className="text-gray-400 text-xs">FULL NAME</p>
              <input value={name} onChange={e => { setName(e.target.value) }} placeholder="John Doe" type="text" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">REG. NO</p>
              <input value={registerNumber} onChange={e => setRegisterNumber(String(e.target.value))} placeholder="124003191" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">PHONE NUMBER</p>
              <input value={phoneNumber} onChange={e => setPhoneNumber(String(e.target.value))} placeholder="72597 58743" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">SASTRA EMAIL ID</p>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="124003191@sastra.ac.in" type="email" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">DEPARTMENT</p>
              <input value={department} onChange={e => setDepartment(e.target.value)} placeholder="CSE" type="text" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">YEAR</p>
              <input value={year} onChange={e => setYear(String(e.target.value))} placeholder="3" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
            </div>
            <button disabled={loading} type="submit" className="hover:bg-yellow-200 transition-all duration-300 ease-in-out cursor-pointer bg-yellow-300 rounded-lg text-black text-xs px-6 py-2 w-full sm:w-[60%] mx-auto mt-10 text-center font-bold">{loading ? "Sending..." : "Register Now"}</button>
          </form>
        </div>
      </div>
      <Footer />
      {showErrorBox && (
        <div className="fixed inset-0 flex items-center justify-center z-[110] px-4">
          <div className="flex flex-col p-6 border border-white/40 rounded-xl bg-black/60 backdrop-blur-sm shadow-xl max-w-xs w-full">
            <div className="text-xs text-white mb-4 text-center">{error}</div>
            <button
              onClick={() => setShowErrorBox(false)}
              className="mx-auto bg-yellow-300 cursor-pointer text-black font-bold text-xs py-1 px-4 rounded hover:bg-yellow-400 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
      {loading && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/40 backdrop-blur-md">
          <div className="bg-[#0f172a] p-6 rounded-2xl border border-white/10 flex flex-col items-center shadow-2xl">
            <Loader2 className="w-10 h-10 animate-spin text-yellow-300" />
            <p className="text-white mt-4 font-semibold">Submitting Details...</p>
          </div>
        </div>
      )}
    </div>
  )
}
