import { addDoc, collection, getDocs } from "firebase/firestore"
import { Timestamp } from "firebase/firestore"
import { db } from "@/config"
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import About from "@/components/About";
import { Events } from "@/components/Events";
import { WhyParticipate } from "@/components/WhyParticipate";
import Timeline from "@/components/Timeline";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { Form } from "@/components/Form";
export default async function Home() {
  const querySnapshot = await getDocs(collection(db, "events"))
  const events = querySnapshot.docs.map((doc) => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      datefrom: data.datefrom?.toDate().toISOString(),
      dateto: data.dateto?.toDate().toISOString()
    }
  })
  return (
    <div className="min-h-screen text-white bg-[#0b0f1a] h-full" suppressHydrationWarning>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <div className="flex flex-col mt-10 w-[90%] mx-auto gap-y-5">
        {
          events.map((event, index) => {
            return(
              <EventCard event={event} key={index}/>
            )
          })
        }
      </div>
      <WhyParticipate />
      <Timeline />
      <Gallery />
      <Footer />
    </div>
  );
}
