import { Form } from '@/components/Form'
import { db } from '@/config'
import { collection, doc, getDoc } from 'firebase/firestore'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function page({ params }){
  const resolvedParams = await params
  const { id } = resolvedParams
  const docSnap = await getDoc(doc(db, "events", id))
  if(!docSnap.exists()){
    notFound()
  }
  const data = docSnap.data()
  const event = {
    id: docSnap.id,
    name: data.name,
    cluster: data.cluster,
    description: data.description,
    venue: data.venue,
    limit: data.limit,
    datefrom: data.datefrom?.toDate().toISOString(),
    dateto: data.dateto?.toDate().toISOString()
  }
  return (
    <>
  <Form event={event}/>
    </>
  )
}
