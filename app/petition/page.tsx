import { PetitionForm } from './_components/petition-form'
import { FileText } from 'lucide-react'

export default function PetitionPage() {
  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10">
          <FileText className="w-10 h-10 text-[#3ddc84] mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
            Sign & <span className="text-[#3ddc84]">Survey</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Your signature demands a town hall. Your survey answers shape the agenda.
            1,500 per district is all it takes.
          </p>
        </div>
        <PetitionForm />
      </div>
    </div>
  )
}
