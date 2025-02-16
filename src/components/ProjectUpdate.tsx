import { Tag } from "lucide-react"
import { Clock } from "lucide-react"
import { Update } from "../types"

export const ProjectUpdate = ({ update }: { update: Update }) => {
    return (
        <div
        key={update.id}
        className="bg-white rounded-lg border border-gray-200 p-6 transition-transform"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{new Date(update.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">
                    {update.category}
                </span>
                </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{update.title}</h2>
            <p className="text-gray-700">{update.description}</p>
        </div>
    )
}