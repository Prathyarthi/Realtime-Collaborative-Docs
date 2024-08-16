import { cn } from "@/lib/utils"
import { useIsThreadActive } from "@liveblocks/react-lexical"
import { Composer, Thread } from "@liveblocks/react-ui"
import { useThreads } from "@liveblocks/react/suspense"

const ThreadWrapper = ({ thread }: ThreadWrapperProps) => {

    const isThreadActive = useIsThreadActive(thread.id)

    return (
        <Thread thread={thread} data-state={isThreadActive ? 'active' : null} className={cn('comment-thread border', isThreadActive && '!border-blue-500 shadow-md', thread.resolved && 'opacity-40')} />
    )
}

function Comments() {

    const { threads } = useThreads()
    return (
        <div className="comments-container">
            <Composer className="comment-composer" />
            {threads.map((thread) => (
                <ThreadWrapper key={thread.id} thread={thread} />
            ))}
        </div>
    )
}

export default Comments