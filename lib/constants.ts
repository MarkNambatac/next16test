export type EventItem = {
    title: string;
    image: string;
    slug: string;
    location: string,
    date: string,
    time: string
}


export const events: EventItem[] = [
    {
        title: "React Summit 2026",
        image: "/images/event1.png",
        slug: "react-summit-2026",
        location: "Amsterdam, Netherlands",
        date: "April 15-16, 2026",
        time: "9:00 AM - 6:00 PM CET"
    },
    {
        title: "AWS re:Invent 2025",
        image: "/images/event2.png",
        slug: "aws-reinvent-2025",
        location: "Las Vegas, USA",
        date: "December 1-5, 2025",
        time: "8:00 AM - 8:00 PM PST"
    },
    {
        title: "Google I/O 2026",
        image: "/images/event3.png",
        slug: "google-io-2026",
        location: "Mountain View, California",
        date: "May 12-14, 2026",
        time: "10:00 AM - 6:00 PM PST"
    },
    {
        title: "Next.js Conf 2025",
        image: "/images/event4.png",
        slug: "nextjs-conf-2025",
        location: "San Francisco, USA",
        date: "October 25, 2025",
        time: "9:00 AM - 5:00 PM PST"
    },
    {
        title: "GitHub Universe 2025",
        image: "/images/event5.png",
        slug: "github-universe-2025",
        location: "San Francisco, USA",
        date: "November 8-9, 2025",
        time: "9:00 AM - 6:00 PM PST"
    }
];

export default events;