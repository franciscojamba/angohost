
export interface Video {
    title: string;
    description: string;
    videoUrl: string;
    date: string;
}
interface VideoCardProps extends Video { }

const VideoCard: React.FC<VideoCardProps> = ({ title, description, videoUrl, date }) => {
    return (
        <div className="w-[350px] h-[370px] bg-white rounded-[12px] overflow-hidden" style={{ boxShadow: " 0 2.8px 2.2px rgba(0, 0, 0, 0.034)" }}>
            <iframe
                className="w-full h-48 md:h-56 lg:h-64"
                src={videoUrl}
                title={title}
                allowFullScreen
            ></iframe>
            <div className="px-3 overflow-y-scroll">
                <h2 className="text-md font-[Rubik] font-semibold mb-2 mt-3" style={{lineHeight: '20px'}}>{title}</h2>
                <p className="text-gray-600 font-[Rubik] mb-2">{description}</p>
                <p className="text-gray-500 font-[Rubik] text-sm">{date}</p>
            </div>
        </div>
    );
};

export default VideoCard;