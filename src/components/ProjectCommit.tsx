import { Commit } from "../types"
import { Clock } from "lucide-react"
export const ProjectCommit = ({ commit }: { commit: Commit }) => {
    return (
        <div className="flex space-between mb-4">
            <div className="flex space-x-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{new Date(commit.date).toLocaleDateString()}</span>
            </div>
            <div className="flex space-x-2 justify-center w-full">
                <a className="hover:underline" href={`https://github.com/${commit.author}/${commit.project}/commit/${commit.id}`} target="_blank" rel="noopener noreferrer">
                    <span>{commit.message.slice(0, 50) + (commit.message.length > 50 ? "..." : "")}</span>
                </a>
            </div>
            <div className="flex space-x-2 flex-1 justify-end">
                <img src={commit.avatar} className="h-4 w-4 rounded-full" />
                <span>{commit.author}</span>
            </div>
        </div>
    )
}