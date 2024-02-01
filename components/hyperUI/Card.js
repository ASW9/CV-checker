import Image from "next/image"

const Card = (props) => {
    return (
        <a href={props.href} class="block rounded-lg p-4 m-2 w-full max-w-md shadow-sm shadow-indigo-100 border hover:shadow-md transform hover:scale-105 ease-in-out duration-200">
            {props.imgSrc &&
                <Image
                    src={props.imgSrc}
                    alt={props.title}
                    width={props.imgWidth}
                    height={props.imgHeight}
                    className="rounded-md object-cover"
                    // class="h-56 w-full rounded-md object-cover"
                />
            }

            <div class="mt-2">
                <dl>
                <div>
                    <dt class="sr-only">Overline</dt>

                    <dd class="text-sm text-gray-500">{props.overline}</dd>
                </div>

                <div>
                    <dt class="sr-only">Title</dt>

                    <dd class="font-medium">{props.title}</dd>
                </div>
                </dl>

                {props.tags && 
                    <div class="mt-6 flex justify-between text-xs w-full">
                        {props.tags.map((tag, idx) => {
                            return <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2" key={idx}>
                                {tag.svg}
                                

                                <div class="mt-1.5 sm:mt-0">
                                <p class="text-gray-500">{tag.label}</p>

                                <p class="font-medium">{tag.value}</p>
                                </div>
                            </div>
                        })}
                    </div>
                }
            </div>
        </a>
    )
}

export default Card