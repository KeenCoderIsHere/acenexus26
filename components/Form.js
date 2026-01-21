'use client'
import Select from "react-select"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Loader2 } from "lucide-react"
import { Footer } from "./Footer"
import { useState } from "react"
import { addDoc, collection, doc, getDoc, getDocs, increment, limit, query, updateDoc, where } from "firebase/firestore"
import { db } from "@/config"
export const Form = ({ event }) => {
  const departmentOptions = [
  { value: "B.Tech. Bioengineering", label: "B.Tech. Bioengineering" },
  { value: "B.Tech. Bioinformatics", label: "B.Tech. Bioinformatics" },
  { value: "B.Tech. Biotechnology", label: "B.Tech. Biotechnology" },
  { value: "B.Tech. Chemical Engineering", label: "B.Tech. Chemical Engineering" },
  { value: "B.Tech. Civil Engineering", label: "B.Tech. Civil Engineering" },
  { value: "B.Tech. Computer Science & Business Systems", label: "B.Tech. Computer Science & Business Systems" },
  { value: "B.Tech. Computer Science & Engineering", label: "B.Tech. Computer Science & Engineering" },
  { value: "B.Tech. Computer Science & Engineering (Artificial Intelligence & Data Science)", label: "B.Tech. Computer Science & Engineering (Artificial Intelligence & Data Science)" },
  { value: "B.Tech. Computer Science & Engineering (Cyber Security & Block Chain Technology)", label: "B.Tech. Computer Science & Engineering (Cyber Security & Block Chain Technology)" },
  { value: "B.Tech. Computer Science & Engineering (IoT & Automation)", label: "B.Tech. Computer Science & Engineering (IoT & Automation)" },
  { value: "B.Tech. Computer Science & Engineering (Networks)", label: "B.Tech. Computer Science & Engineering (Networks)" },
  { value: "B.Tech. Electrical & Electronics Engineering", label: "B.Tech. Electrical & Electronics Engineering" },
  { value: "B.Tech. Electrical & Electronics Engineering (Smart Grid and Electric Vehicles)", label: "B.Tech. Electrical & Electronics Engineering (Smart Grid and Electric Vehicles)" },
  { value: "B.Tech. Electronics & Communication Engineering", label: "B.Tech. Electronics & Communication Engineering" },
  { value: "B.Tech. Electronics & Communication Engineering (Cyber Physical Systems)", label: "B.Tech. Electronics & Communication Engineering (Cyber Physical Systems)" },
  { value: "B.Tech. Electronics & Computer Engineering", label: "B.Tech. Electronics & Computer Engineering" },
  { value: "B.Tech. Electronics & Instrumentation Engineering", label: "B.Tech. Electronics & Instrumentation Engineering" },
  { value: "B.Tech. Electronics Engineering (VLSI Design & Technology)", label: "B.Tech. Electronics Engineering (VLSI Design & Technology)" },
  { value: "B.Tech. Information & Communication Technology", label: "B.Tech. Information & Communication Technology" },
  { value: "B.Tech. Information Technology", label: "B.Tech. Information Technology" },
  { value: "B.Tech. Mechanical Engineering", label: "B.Tech. Mechanical Engineering" },
  { value: "B.Tech. Mechanical Engineering (Digital Manufacturing)", label: "B.Tech. Mechanical Engineering (Digital Manufacturing)" },
  { value: "B.Tech. Mechatronics", label: "B.Tech. Mechatronics" },
  { value: "B.Tech. Aerospace Engineering", label: "B.Tech. Aerospace Engineering" },
  { value: "B.Tech. Robotics & Artificial Intelligence", label: "B.Tech. Robotics & Artificial Intelligence" },
  { value: "B.Optometry", label: "B.Optometry" },
  { value: "B.Sc. (Hons.) Agriculture", label: "B.Sc. (Hons.) Agriculture" },
  { value: "B.Sc. Visual Communication with minor in Journalism", label: "B.Sc. Visual Communication with minor in Journalism" },
  { value: "B.Sc. Visual Communication with minor in Electronic Media", label: "B.Sc. Visual Communication with minor in Electronic Media" },
  { value: "B.Sc. Biochemistry", label: "B.Sc. Biochemistry" },
  { value: "B.Sc. Biochemistry-DMLT", label: "B.Sc. Biochemistry-DMLT" },
  { value: "B.Sc. Computer Science", label: "B.Sc. Computer Science" },
  { value: "B.Sc. Electronics and Communication System", label: "B.Sc. Electronics and Communication System" },
  { value: "B.Sc. Mathematics with Computer Applications", label: "B.Sc. Mathematics with Computer Applications" },
  { value: "B.Sc. Microbiology", label: "B.Sc. Microbiology" },
  { value: "B.Sc. Microbiology-DMLT", label: "B.Sc. Microbiology-DMLT" },
  { value: "B.Sc. Physics", label: "B.Sc. Physics" },
  { value: "B.A. Economics & Public Policy", label: "B.A. Economics & Public Policy" },
  { value: "B.A. LL.B. (Hons.)", label: "B.A. LL.B. (Hons.)" },
  { value: "B.B.A. LL.B. (Hons.)", label: "B.B.A. LL.B. (Hons.)" },
  { value: "B.Com. LL.B. (Hons.)", label: "B.Com. LL.B. (Hons.)" },
  { value: "B.Com. with minor in Business Process", label: "B.Com. with minor in Business Process" },
  { value: "B.Com. with minor in Financial Markets", label: "B.Com. with minor in Financial Markets" },
  { value: "B.Com. with minor in Corporate Finance & Strategy", label: "B.Com. with minor in Corporate Finance & Strategy" },
  { value: "B.Com. with minor in Economics & Public Policy", label: "B.Com. with minor in Economics & Public Policy" },
  { value: "BBA (Bachelor of Business Administration)", label: "BBA (Bachelor of Business Administration)" },
  { value: "BCA (Bachelor of Computer Applications)", label: "BCA (Bachelor of Computer Applications)" },
  { value: "B.Ed. (Bachelor of Education)", label: "B.Ed. (Bachelor of Education)" },
  { value: "BFA in Music", label: "BFA in Music" },
  { value: "BFA in Bharatanatyam", label: "BFA in Bharatanatyam" },
  { value: "M.Tech. Integrated Biotechnology (5-year)", label: "M.Tech. Integrated Biotechnology (5-year)" },
  { value: "M.Tech. Integrated Medical Nanotechnology (5-year)", label: "M.Tech. Integrated Medical Nanotechnology (5-year)" },
  { value: "M.Tech. Integrated Advanced Manufacturing (5-year)", label: "M.Tech. Integrated Advanced Manufacturing (5-year)" },
  { value: "M.Tech. Integrated Automobile Engineering (5-year)", label: "M.Tech. Integrated Automobile Engineering (5-year)" },
  { value: "M.Sc. Integrated Biotechnology", label: "M.Sc. Integrated Biotechnology" },
  { value: "M.Sc. Integrated Physics", label: "M.Sc. Integrated Physics" },
  { value: "M.Sc. Integrated Chemistry", label: "M.Sc. Integrated Chemistry" },
  { value: "M.Sc. Integrated Mathematics", label: "M.Sc. Integrated Mathematics" },
  { value: "M.Sc. Integrated Mathematics and Computing", label: "M.Sc. Integrated Mathematics and Computing" },
  { value: "M.Sc. Integrated Data Science", label: "M.Sc. Integrated Data Science" },
  { value: "B.Ed. Integrated", label: "B.Ed. Integrated" },
  { value: "M.Tech. Aerospace Engineering", label: "M.Tech. Aerospace Engineering" },
  { value: "M.Tech. Digital Manufacturing", label: "M.Tech. Digital Manufacturing" },
  { value: "M.Tech. Artificial Intelligence and Data Science", label: "M.Tech. Artificial Intelligence and Data Science" },
  { value: "M.Tech. Computer Science & Engineering", label: "M.Tech. Computer Science & Engineering" },
  { value: "M.Tech. Cyber Security", label: "M.Tech. Cyber Security" },
  { value: "M.Tech. VLSI Design", label: "M.Tech. VLSI Design" },
  { value: "M.Tech. Artificial Intelligence & Robotics", label: "M.Tech. Artificial Intelligence & Robotics" },
  { value: "M.Tech. Power & Energy Systems", label: "M.Tech. Power & Energy Systems" },
  { value: "M.Tech. Wireless Smart Communications", label: "M.Tech. Wireless Smart Communications" },
  { value: "M.Tech. Big Data Biology", label: "M.Tech. Big Data Biology" },
  { value: "M.Tech. Industrial Biotechnology", label: "M.Tech. Industrial Biotechnology" },
  { value: "M.Tech. Medical Nanotechnology", label: "M.Tech. Medical Nanotechnology" },
  { value: "M.Tech. Structural Engineering", label: "M.Tech. Structural Engineering" },
  { value: "M.Tech. Construction Engineering & Management", label: "M.Tech. Construction Engineering & Management" },
  { value: "M.Tech. Environmental Engineering", label: "M.Tech. Environmental Engineering" },
  { value: "M.Tech. Embedded Systems", label: "M.Tech. Embedded Systems" },
  { value: "M.Tech. Power Electronics & Drives", label: "M.Tech. Power Electronics & Drives" },
  { value: "M.Tech. Communication Systems", label: "M.Tech. Communication Systems" },
  { value: "M.Tech. Thermal Engineering", label: "M.Tech. Thermal Engineering" },
  { value: "M.Optometry", label: "M.Optometry" },
  { value: "MCA (Master of Computer Applications)", label: "MCA (Master of Computer Applications)" },
  { value: "MBA with minor in Strategy", label: "MBA with minor in Strategy" },
  { value: "MBA with minor in Data Sciences", label: "MBA with minor in Data Sciences" },
  { value: "MBA with minor in Marketing", label: "MBA with minor in Marketing" },
  { value: "MBA with minor in Supply Chain Management (SCM)", label: "MBA with minor in Supply Chain Management (SCM)" },
  { value: "M.Sc. in Physics", label: "M.Sc. in Physics" },
  { value: "M.Sc. in Chemistry", label: "M.Sc. in Chemistry" },
  { value: "M.Sc. in Mathematics", label: "M.Sc. in Mathematics" },
  { value: "M.Sc. in Data Science", label: "M.Sc. in Data Science" },
  { value: "M.Sc. Biochemistry", label: "M.Sc. Biochemistry" },
  { value: "M.Sc. Computer Science", label: "M.Sc. Computer Science" },
  { value: "M.Sc. Microbiology", label: "M.Sc. Microbiology" },
  { value: "M.A. in Sanskrit", label: "M.A. in Sanskrit" },
  { value: "M.A. in English", label: "M.A. in English" },
  { value: "M.A. Divyaprabhandam", label: "M.A. Divyaprabhandam" },
  { value: "M.A. Sanskrit (5-Year Integrated)", label: "M.A. Sanskrit (5-Year Integrated)" },
  { value: "M.Com.", label: "M.Com." },
  { value: "M.Ed. (Master of Education)", label: "M.Ed. (Master of Education)" },
  { value: "MFA in Bharatanatyam", label: "MFA in Bharatanatyam" },
]
  const selectStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "#0f172a",
    borderColor: "#334155",
    boxShadow: "none",
    minHeight: "38px"
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#0f172a"
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#1e293b" : "#0f172a",
    color: "white",
    fontSize: "12px"
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
    fontSize: "12px"
  }),
  input: (base) => ({
    ...base,
    color: "white",
    fontSize: "12px"
  })
  }
  const [name,setName] = useState('')
  const [name1,setName1] = useState('')
  const [name2,setName2] = useState('')
  const [name3,setName3] = useState('')
  const [expectations,setExpectations] = useState('')
  const [registerNumber2,setRegisterNumber2] = useState('')
  const [registerNumber3,setRegisterNumber3] = useState('')
  const [count,setCount] = useState(0)
  const [registerNumber,setRegisterNumber] = useState('')
  const [registerNumber1,setRegisterNumber1] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [email,setEmail] = useState('')
  const [department,setDepartment] = useState('')
  const [year,setYear] = useState('')
  const [error,setError] = useState('')
  const [showErrorBox,setShowErrorBox] = useState(false)
  const [loading,setLoading] = useState(false)
  const [showWhatsappLink,setShowWhatsappLink] = useState(false)
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
    if(!/^\d{10}$/.test(phoneNumber)){
      setError('Invalid Phone Number (Format: 9876543210)!')
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
    if(registerNumber !== email.split("@")[0]){
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
  const checkIfAlreadyRegisteredForOtherEvent = async (regNo) => {
    try{
      const collectionRef = collection(db, "submissions")
      const q = query(collectionRef, where("registerNumber", "array-contains", `${regNo}`))
      const querySnapshot = await getDocs(q)
      const already = querySnapshot.docs.some((doc) => doc.data().eventId != event.id)
      return (already)
    }
    catch(error){
      setError(error.message || "An error occured!")
      setShowErrorBox(true)
      return false
    }
  }
  const checkIfAlreadyRegistered = async (regNo) => {
    try{
      const collectionRef = collection(db, "submissions")
      const q = query(collectionRef, where("registerNumber", "array-contains", `${regNo}`), where("eventId", "==", event.id))
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
        setLoading(false)
        setError("Sorry! The event is now fully booked!")
        setShowErrorBox(true)
        return
      }
      setLoading(true)
      if(event.type === "individual"){
          if(!validateCredentials()){
          setLoading(false)
          return
        }
        const alreadyRegistered = await checkIfAlreadyRegistered(registerNumber)
        if(alreadyRegistered){
          setLoading(false)
          setError('You have already registered for this event!')
          setShowErrorBox(true)
          return
        }
        const alreadyRegisteredForOtherEvent = await checkIfAlreadyRegisteredForOtherEvent(registerNumber)
        if(alreadyRegisteredForOtherEvent){
          setError('You are allowed to register for only one workshop!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        const docRef = await addDoc(collection(db, "submissions"), {
          name,
          registerNumber: [registerNumber],
          phoneNumber,
          email,
          department,
          year,
          submittedAt: new Date(),
          eventId: event.id,
          eventName: event.name
        })
        await updateDoc(doc(db, "events", event.id), {
          limit: increment(-1)
        })
        if(expectations.trim()){
          const expectationRef = await addDoc(collection(db, "expectations"), {
            registerNumber,
            expectations
          })
        }
        setShowWhatsappLink(true)
        setName('')
        setRegisterNumber('')
        setPhoneNumber('')
        setEmail('')
        setDepartment('')
        setYear('')
        setShowErrorBox(true)
        setError(`Registration Successful!`)
        setExpectations('')
      }
      else if(event.type === "pair"){
        if(event.limit < 2){
        setLoading(false)
        setError("Sorry! The event is now fully booked!")
        setShowErrorBox(true)
        return
      }
        if(!validateCredentials()){
        setLoading(false)
        return
        }
        if(!name1.trim()){
          setError('Name field is mandatory!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(!registerNumber1.trim()){
          setError('Register Number field is mandatory!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(!registerNumber1.match(/^\d{9}$/)){
          setError('Invalid Register Number!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        const alreadyRegistered = await checkIfAlreadyRegistered(registerNumber)
        if(alreadyRegistered){
          setLoading(false)
          setError('You have already registered for this event!')
          setShowErrorBox(true)
          return
        }
        const alreadyRegisteredForOtherEvent = await checkIfAlreadyRegisteredForOtherEvent(registerNumber)
        if(alreadyRegisteredForOtherEvent){
          setError('You are allowed to register for only one workshop!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        const alreadyRegistered1 = await checkIfAlreadyRegistered(registerNumber1)
        if(alreadyRegistered1){
          setLoading(false)
          setError(`${registerNumber1} has already registered for this event!`)
          setShowErrorBox(true)
          return
        }
        const alreadyRegisteredForOtherEvent1 = await checkIfAlreadyRegisteredForOtherEvent(registerNumber1)
        if(alreadyRegisteredForOtherEvent1){
          setError(`${registerNumber1} is allowed to register for only one workshop!`)
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(registerNumber === registerNumber1){
          setError(`No duplicate entries allowed in same team!`)
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        const docRef = await addDoc(collection(db, "submissions"), {
          name: [name,name1],
          registerNumber: [registerNumber,registerNumber1],
          phoneNumber,
          email,
          department,
          year,
          submittedAt: new Date(),
          eventId: event.id,
          eventName: event.name
        })
        await updateDoc(doc(db, "events", event.id), {
          limit: increment(-2)
        })
        if(expectations.trim()){
          const expectationRef = await addDoc(collection(db, "expectations"), {
            registerNumber,
            expectations
          })
        }
        setShowWhatsappLink(true)
        setName('')
        setRegisterNumber('')
        setPhoneNumber('')
        setEmail('')
        setDepartment('')
        setYear('')
        setName1('')
        setRegisterNumber1('')
        setShowErrorBox(true)
        setError('Registration Successful!')
        setExpectations('')
      }
      else if(event.type === 'group'){
        if(event.limit - count < 0){
        setLoading(false)
        setError("Sorry! The event is now fully booked!")
        setShowErrorBox(true)
        return
      }
        if(!validateCredentials()){
        setLoading(false)
        return
        }
        if(!name1.trim()){
          setError('Name field is mandatory!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(!registerNumber1.trim()){
          setError('Register Number field is mandatory!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(!registerNumber1.match(/^\d{9}$/)){
          setError('Invalid Register Number!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        const alreadyRegistered = await checkIfAlreadyRegistered(registerNumber)
        if(alreadyRegistered){
          setLoading(false)
          setError('You have already registered for this event!')
          setShowErrorBox(true)
          return
        }
        const alreadyRegisteredForOtherEvent = await checkIfAlreadyRegisteredForOtherEvent(registerNumber)
        if(alreadyRegisteredForOtherEvent){
          setError('You are allowed to register for only one workshop!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        const alreadyRegistered1 = await checkIfAlreadyRegistered(registerNumber1)
        if(alreadyRegistered1){
          setLoading(false)
          setError(`${registerNumber1} has already registered for this event!`)
          setShowErrorBox(true)
          return
        }
        const alreadyRegisteredForOtherEvent1 = await checkIfAlreadyRegisteredForOtherEvent(registerNumber1)
        if(alreadyRegisteredForOtherEvent1){
          setError(`${registerNumber1} is allowed to register for only one workshop!`)
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(count === 3){
          if(!name2.trim()){
          setError('Name field is mandatory!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(!registerNumber2.trim()){
          setError('Register Number field is mandatory!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(!registerNumber2.match(/^\d{9}$/)){
          setError('Invalid Register Number!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
          const alreadyRegistered2 = await checkIfAlreadyRegistered(registerNumber2)
          if(alreadyRegistered2){
            setLoading(false)
            setError(`${registerNumber2} has already registered for this event!`)
            setShowErrorBox(true)
            return
          }
          const alreadyRegisteredForOtherEvent2 = await checkIfAlreadyRegisteredForOtherEvent(registerNumber2)
          if(alreadyRegisteredForOtherEvent2){
            setError(`${registerNumber2} is allowed to register for only one workshop!`)
            setShowErrorBox(true)
            setLoading(false)
            return
          }
          if(registerNumber === registerNumber1 || registerNumber1 === registerNumber2 || registerNumber === registerNumber2){
            setError(`No duplicate entries inside same team!`)
            setShowErrorBox(true)
            setLoading(false)
            return
          }
            const docRef = await addDoc(collection(db, "submissions"), {
            name: [name,name1,name2],
            registerNumber: [registerNumber,registerNumber1,registerNumber2],
            phoneNumber,
            email,
            department,
            year,
            submittedAt: new Date(),
            eventId: event.id,
            eventName: event.name
          })
          await updateDoc(doc(db, "events", event.id), {
            limit: increment(-3)
          })
          if(expectations.trim()){
            const expectationsRef = await addDoc(collection(db, "expectations"), {
              registerNumber,
              expectations
            })
          }
          setShowWhatsappLink(true)
          setName('')
          setRegisterNumber('')
          setPhoneNumber('')
          setEmail('')
          setDepartment('')
          setYear('')
          setName1('')
          setRegisterNumber1('')
          setName2('')
          setRegisterNumber2('')
          setShowErrorBox(true)
          setError('Registration Successful!')
          setExpectations('')
          setLoading(false)
          setCount(0)
          return
        }
        else if(count === 4){
          if(!name2.trim()){
          setError('Name field is mandatory!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(!registerNumber2.trim()){
          setError('Register Number field is mandatory!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(!registerNumber2.match(/^\d{9}$/)){
          setError('Invalid Register Number!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(!name3.trim()){
          setError('Name field is mandatory!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(!registerNumber3.trim()){
          setError('Register Number field is mandatory!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        if(!registerNumber3.match(/^\d{9}$/)){
          setError('Invalid Register Number!')
          setShowErrorBox(true)
          setLoading(false)
          return
        }
          const alreadyRegistered2 = await checkIfAlreadyRegistered(registerNumber2)
          if(alreadyRegistered2){
            setLoading(false)
            setError(`${registerNumber2} has already registered for this event!`)
            setShowErrorBox(true)
            return
          }
          const alreadyRegisteredForOtherEvent2 = await checkIfAlreadyRegisteredForOtherEvent(registerNumber2)
          if(alreadyRegisteredForOtherEvent2){
            setError(`${registerNumber2} is allowed to register for only one workshop!`)
            setShowErrorBox(true)
            setLoading(false)
            return
          }
          const alreadyRegistered3 = await checkIfAlreadyRegistered(registerNumber3)
          if(alreadyRegistered3){
            setLoading(false)
            setError(`${registerNumber3} has already registered for this event!`)
            setShowErrorBox(true)
            return
          }
          const alreadyRegisteredForOtherEvent3 = await checkIfAlreadyRegisteredForOtherEvent(registerNumber3)
          if(alreadyRegisteredForOtherEvent3){
            setError(`${registerNumber3} is allowed to register for only one workshop!`)
            setShowErrorBox(true)
            setLoading(false)
            return
          }
          if(registerNumber === registerNumber1 || registerNumber === registerNumber2 || registerNumber === registerNumber3 || registerNumber1 === registerNumber2 || registerNumber1 === registerNumber3 || registerNumber2 === registerNumber3){
            setError(`No duplicate entries allowed in the same team!`)
            setShowErrorBox(true)
            setLoading(false)
            return
          }
            const docRef = await addDoc(collection(db, "submissions"), {
            name: [name,name1,name2,name3],
            registerNumber: [registerNumber,registerNumber1,registerNumber2,registerNumber3],
            phoneNumber,
            email,
            department,
            year,
            submittedAt: new Date(),
            eventId: event.id,
            eventName: event.name
          })
          await updateDoc(doc(db, "events", event.id), {
            limit: increment(-4)
          })
          if(expectations.trim()){
            const expectationsRef = await addDoc(collection(db, "expectations"), {
              registerNumber,
              expectations
            })
          }
          setShowWhatsappLink(true)
          setName('')
          setRegisterNumber('')
          setPhoneNumber('')
          setEmail('')
          setDepartment('')
          setYear('')
          setName1('')
          setRegisterNumber1('')
          setName2('')
          setRegisterNumber2('')
          setName3('')
          setRegisterNumber3('')
          setShowErrorBox(true)
          setError('Registration Successful!')
          setExpectations('')
          setLoading(false)
          setCount(0)
          return
        }
        if(registerNumber === registerNumber1){
          setError(`No duplicate entries allowed in same team!`)
          setShowErrorBox(true)
          setLoading(false)
          return
        }
        const docRef = await addDoc(collection(db, "submissions"), {
          name: [name,name1],
          registerNumber: [registerNumber,registerNumber1],
          phoneNumber,
          email,
          department,
          year,
          submittedAt: new Date(),
          eventId: event.id,
          eventName: event.name
        })
        await updateDoc(doc(db, "events", event.id), {
          limit: increment(-2)
        })
        if(expectations.trim()){
            const expectationsRef = await addDoc(collection(db, "expectations"), {
              registerNumber,
              expectations
            })
        }
        setShowWhatsappLink(true)
        setName('')
        setRegisterNumber('')
        setPhoneNumber('')
        setEmail('')
        setDepartment('')
        setYear('')
        setName1('')
        setRegisterNumber1('')
        setShowErrorBox(true)
        setError('Registration Successful!')
        setExpectations('')
        setCount(0)
      }
    }
    catch(error){
      setError(error.message || "An error occured!")
      setShowErrorBox(true)
    }
    finally{
      setLoading(false)
    }
  }
  if(!event){
    return(
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/40 backdrop-blur-md">
          <div className="bg-[#0f172a] p-6 rounded-2xl border border-white/10 flex flex-col items-center shadow-2xl">
            <Loader2 className="w-10 h-10 animate-spin text-yellow-300" />
            <p className="text-white mt-4 font-semibold">Loading</p>
          </div>
        </div>
    )
  }
  return (
    <div className="flex flex-col bg-[#0b0f1a] min-h-screen">
      <div className="flex flex-col mb-10 w-full max-w-2xl mx-auto">
        <div className="w-[90%] mx-auto">
          <Image src={`/${event.imageLinkName}`} width={800} height={400} alt="Photo" className="w-full h-auto mx-auto mt-7 object-cover rounded-xl md:rounded-b-3xl" />
          <div className="flex flex-col bottom-4 left-4 right-4 border-slate-700 border-1 rounded-xl px-2 py-5 gap-y-3 mt-10 items-center">
            <div className="rounded-2xl bg-yellow-300 text-black font-bold text-[20px] text-center w-fit px-2 ">{event.cluster}</div>
            <div className="text-3xl font-bold text-white break-words text-center">{event.name}</div>
            <div className="flex flex-wrap mt-1 gap-x-4 gap-y-3">
              <div className="flex flex-row items-center text-white gap-x-1 mx-auto">
                <Clock className="w-4 h-4" color="white" />
                <div className="text-xs sm:text-sm">{formatEventTime(event.datefrom)}-{formatEventTime(event.dateto)}</div>
              </div>
              <div className="flex flex-row items-center text-white gap-x-1 mx-auto">
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
        {
          event?.type === "pair" ? (
                <div className="flex flex-col mt-10">
                <div className="text-white text-2xl border-b-[1px] py-2 font-semibold border-yellow-400 w-fit text-center mx-auto">Register Now</div>
                <form onSubmit={handleSubmit} className="flex flex-col w-[90%] sm:w-[80%] mx-auto mt-5">
                  <div className="flex flex-col gap-y-2">
                    <p className="text-gray-400 text-xs">FULL NAME</p>
                    <input value={name} onChange={e => { setName(e.target.value) }} placeholder="" type="text" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">REG. NO</p>
                    <input value={registerNumber} onChange={e => setRegisterNumber(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">PHONE NUMBER</p>
                    <input value={phoneNumber} onChange={e => setPhoneNumber(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">SASTRA EMAIL ID</p>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="" type="email" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">DEPARTMENT</p>

                    <Select
                      options={departmentOptions}
                      styles={selectStyles}
                      placeholder="Search or select department"
                      isSearchable
                      value={
                        department
                          ? departmentOptions.find(opt => opt.value === department)
                          : null
                      }
                      onChange={(selected) => setDepartment(selected ? selected.value : "")}
                      className="text-xs"
                      classNamePrefix="react-select"
                    />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">YEAR</p>
                    <Select
                    options={[
                      { value: "1", label: "1st Year" },
                      { value: "2", label: "2nd Year" },
                      { value: "3", label: "3rd Year" },
                      { value: "4", label: "4th Year" },
                      { value: "5", label: "5th Year" }
                    ]}
                    styles={selectStyles}
                    placeholder="Select year"
                    value={year ? { value: year, label: `${year}` } : null}
                    onChange={(selected) => setYear(selected ? selected.value : "")}
                    className="text-xs"
                  />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">FULL NAME (MEMBER 2)</p>
                    <input value={name1} onChange={e => { setName1(e.target.value) }} placeholder="" type="text" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">REG. NO (MEMBER 2)</p>
                    <input value={registerNumber1} onChange={e => setRegisterNumber1(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">What do you expect in {event.name} (Optional)</p>
                    <input value={expectations} onChange={e => setExpectations(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" type="text"/>
                  </div>
                  <button disabled={loading} type="submit" className="hover:bg-yellow-200 transition-all duration-300 ease-in-out cursor-pointer bg-yellow-300 rounded-lg text-black text-xs px-6 py-2 w-full sm:w-[60%] mx-auto mt-10 text-center font-bold">{loading ? "Sending..." : "Register Now"}</button>
                </form>
              </div>
          )
          :
          event.type === "individual" ? (
            <div className="flex flex-col mt-10">
          <div className="text-white text-2xl border-b-[1px] py-2 font-semibold border-yellow-400 w-fit text-center mx-auto">Register Now</div>
          <form onSubmit={handleSubmit} className="flex flex-col w-[90%] sm:w-[80%] mx-auto mt-5">
            <div className="flex flex-col gap-y-2">
              <p className="text-gray-400 text-xs">FULL NAME</p>
              <input value={name} onChange={e => { setName(e.target.value) }} placeholder="" type="text" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">REG. NO</p>
              <input value={registerNumber} onChange={e => setRegisterNumber(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">PHONE NUMBER</p>
              <input value={phoneNumber} onChange={e => setPhoneNumber(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">SASTRA EMAIL ID</p>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="" type="email" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">DEPARTMENT</p>

              <Select
                options={departmentOptions}
                styles={selectStyles}
                placeholder="Search or select department"
                isSearchable
                value={
                  department
                    ? departmentOptions.find(opt => opt.value === department)
                    : null
                }
                onChange={(selected) => setDepartment(selected ? selected.value : "")}
                className="text-xs"
                classNamePrefix="react-select"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">YEAR</p>
              <Select
              options={[
                { value: "1", label: "1st Year" },
                { value: "2", label: "2nd Year" },
                { value: "3", label: "3rd Year" },
                { value: "4", label: "4th Year" },
                { value: "5", label: "5th Year" }
              ]}
              styles={selectStyles}
              placeholder="Select year"
              value={year ? { value: year, label: `${year}` } : null}
              onChange={(selected) => setYear(selected ? selected.value : "")}
              className="text-xs"
            />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">What do you expect in {event.name} (Optional)</p>
              <input value={expectations} onChange={e => setExpectations(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" type="text"/>
            </div>
            <button disabled={loading} type="submit" className="hover:bg-yellow-200 transition-all duration-300 ease-in-out cursor-pointer bg-yellow-300 rounded-lg text-black text-xs px-6 py-2 w-full sm:w-[60%] mx-auto mt-10 text-center font-bold">{loading ? "Sending..." : "Register Now"}</button>
          </form>
        </div>
          )
          :
          event.type === "group" ? (
            <div className="flex flex-col mt-10">
                <div className="text-white text-2xl border-b-[1px] py-2 font-semibold border-yellow-400 w-fit text-center mx-auto">Register Now</div>
                <form onSubmit={handleSubmit} className="flex flex-col w-[90%] sm:w-[80%] mx-auto mt-5">
                  <div className="flex flex-col gap-y-2 mt-5 mb-5">
                  <p className="text-gray-400 text-xs">NUMBER OF GROUP MEMBERS</p>
                  <Select
                  options={[
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" }
                  ]}
                  styles={selectStyles}
                  placeholder="Select number of group members"
                  value={count ? { value: count, label: `${count}` } : null}
                  onChange={(selected) => setCount(selected ? Number(selected.value) : 2)}
                  className="text-xs"
                />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p className="text-gray-400 text-xs">FULL NAME</p>
                    <input value={name} onChange={e => { setName(e.target.value) }} placeholder="" type="text" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">REG. NO</p>
                    <input value={registerNumber} onChange={e => setRegisterNumber(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">PHONE NUMBER</p>
                    <input value={phoneNumber} onChange={e => setPhoneNumber(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">SASTRA EMAIL ID</p>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="" type="email" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">DEPARTMENT</p>

                    <Select
                      options={departmentOptions}
                      styles={selectStyles}
                      placeholder="Search or select department"
                      isSearchable
                      value={
                        department
                          ? departmentOptions.find(opt => opt.value === department)
                          : null
                      }
                      onChange={(selected) => setDepartment(selected ? selected.value : "")}
                      className="text-xs"
                      classNamePrefix="react-select"
                    />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">YEAR</p>
                    <Select
                    options={[
                      { value: "1", label: "1st Year" },
                      { value: "2", label: "2nd Year" },
                      { value: "3", label: "3rd Year" },
                      { value: "4", label: "4th Year" },
                      { value: "5", label: "5th Year" }
                    ]}
                    styles={selectStyles}
                    placeholder="Select year"
                    value={year ? { value: year, label: `${year}` } : null}
                    onChange={(selected) => setYear(selected ? selected.value : "")}
                    className="text-xs"
                  />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">FULL NAME (MEMBER 2)</p>
                    <input value={name1} onChange={e => { setName1(e.target.value) }} placeholder="" type="text" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">REG. NO (MEMBER 2)</p>
                    <input value={registerNumber1} onChange={e => setRegisterNumber1(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                  </div>
                  {
                    count === 3 ? (
                      <>
                          <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-gray-400 text-xs">FULL NAME (MEMBER 3)</p>
                            <input value={name2} onChange={e => { setName2(e.target.value) }} placeholder="" type="text" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                          </div>
                          <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-gray-400 text-xs">REG. NO (MEMBER 3)</p>
                            <input value={registerNumber2} onChange={e => setRegisterNumber2(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                          </div>
                      </>
                    ) 
                    : 
                    count === 4 ? (
                      <>
                          <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-gray-400 text-xs">FULL NAME (MEMBER 3)</p>
                            <input value={name2} onChange={e => { setName2(e.target.value) }} placeholder="" type="text" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                          </div>
                          <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-gray-400 text-xs">REG. NO (MEMBER 3)</p>
                            <input value={registerNumber2} onChange={e => setRegisterNumber2(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                          </div>
                          <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-gray-400 text-xs">FULL NAME (MEMBER 4)</p>
                            <input value={name3} onChange={e => { setName3(e.target.value) }} placeholder="" type="text" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                          </div>
                          <div className="flex flex-col gap-y-2 mt-5">
                            <p className="text-gray-400 text-xs">REG. NO (MEMBER 4)</p>
                            <input value={registerNumber3} onChange={e => setRegisterNumber3(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" />
                          </div>
                      </>
                    ) : (<></>)
                  }
                  <div className="flex flex-col gap-y-2 mt-5">
                    <p className="text-gray-400 text-xs">What do you expect in {event.name} (Optional)</p>
                    <input value={expectations} onChange={e => setExpectations(String(e.target.value))} placeholder="" className="focus:outline-none px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white" type="text"/>
                  </div>
                  <button disabled={loading} type="submit" className="hover:bg-yellow-200 transition-all duration-300 ease-in-out cursor-pointer bg-yellow-300 rounded-lg text-black text-xs px-6 py-2 w-full sm:w-[60%] mx-auto mt-10 text-center font-bold">{loading ? "Sending..." : "Register Now"}</button>
                </form>
              </div>
          )
          :
          (<></>)
        }
      </div>
      <Footer />
      {showErrorBox && (
        <div className="fixed inset-0 flex items-center justify-center z-[110] px-4">
          <div className="flex flex-col p-6 border border-white/40 rounded-xl bg-black/60 backdrop-blur-sm shadow-xl max-w-xs w-full">
            <div className="text-xs text-white mb-4 text-center">{error}</div>
            {
              showWhatsappLink && event.whatsappLink && (
                <p className="mb-3 mx-auto text-center text-white text-xs">Join the whatsapp group: <a href={event.whatsappLink} target="_blank" rel="noopener noreferer" className="break-all text-blue-500 underline cursor-pointer">{event.whatsappLink}</a></p>
              )
            }
            <button
              onClick={() => {
                setShowErrorBox(false)
                setShowWhatsappLink(false)
              }}
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
