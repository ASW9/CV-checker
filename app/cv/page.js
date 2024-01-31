"use client"
import Card from "@/components/hyperUI/Card";

const CvPage = () => {
    const cardProps = {
        title: "video.title",
        description: "video.description",
        href: "/cv/feedback",
        overline: "Webinar",
        // tags:[
        //         {
        //             label: "Conversion",
        //             value: video.conversion + "%",
        //             svg: <FilterIcon />
        //         },
        //         {
        //             label: "Visits",
        //             value: video.visits,
        //             svg: <UserIcon />
        //         },
        //         {
        //             label: "Status",
        //             value: "Published",
        //             svg: <TagIcon />
        //         },
        //         {
        //             label: "Created",
        //             value: video.createdAt.yyyymmdd(),
        //             svg: <CalendarIcon />
        //         }
        //     ]
        }

    return (
        <div className="flex flex-col items-center">
            <Card 
                title="Morgan Stanley"
                description="technology insight week"
                href="/cv/feedback"
                overline= "Resumate"
            />
            <Card 
                title="Jane Street"
                description="Spring week"
                href="/cv/feedback"
                overline= "Resumate"
            />
            <Card 
                title="Barclays"
                description="Spring week"
                href="/cv/feedback"
                overline= "Resumate"
            />
            <Card 
                title="ThoroGood"
                description="Summer Internship"
                href="/cv/feedback"
                overline= "Resumate"
            />
            <Card 
                title="Microsoft"
                description="Summer Internship"
                href="/cv/feedback"
                overline= "Resumate"
            />
        </div>
  );

};

export default CvPage;