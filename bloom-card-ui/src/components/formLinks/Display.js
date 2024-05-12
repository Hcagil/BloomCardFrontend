export const Display = ({ index, watch }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="relative w-12 h-12 px-6 bg-gray-200 rounded-full">
                <img
                    src={watch(`links[${index}].type.icon`)}
                    className="absolute w-5 h-5 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
            </div>
            <div className="px-6 capitalize break-words">
                {watch(`links[${index}].title`)}
            </div>
        </div>
    );
};
