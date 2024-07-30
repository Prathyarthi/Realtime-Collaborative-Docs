import Header from "@/components/Header"
import { Editor } from "@/components/editor/Editor"

function Document() {
    return (
        <div>
            <Header>
                <div className="flex w-fit items-center justify-center gap-2">
                    <p className="document-title">Document</p>
                </div>
            </Header>
            <Editor />
        </div>
    )
}

export default Document