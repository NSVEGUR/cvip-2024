const news = [
  "First round results are notified to authors",
  "Submissions for the first round is closed",
  "First Round Paper Submission Deadline is Extended until April 30, 2024",
  // {
  // 	title: 'Demo Title',
  // 	href: 'Demo Link'
  // }
] as string[] | { href: string; title: string }[];

export function LatestNews() {
  return (
    <div className="relative rounded border bg-muted shadow-md">
      <div className=" absolute -top-5 left-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
          />
        </svg>
      </div>
      <div className="h-full w-full overflow-hidden rounded">
        <div className="h-2 w-full bg-accent" />
        <div className="p-10 -sm:px-3">
          <h1 className=" text-xl font-medium text-accent">Latest News</h1>
          <ul className="my-5 flex flex-col gap-2">
            {news.map((news, index) => (
              <li
                className={`rounded-sm bg-dominant p-2 shadow-sm ${
                  typeof news != "string" &&
                  "hover:bg-muted-secondary hover:shadow-md"
                }`}
                key={index}
              >
                {typeof news === "string" ? (
                  <span>{news}</span>
                ) : (
                  <a href={news.href} className="m-0 block h-full w-full">
                    <span>{news.title}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
