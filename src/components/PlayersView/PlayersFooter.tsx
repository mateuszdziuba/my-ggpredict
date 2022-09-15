const disabled = 'text-gray-500 pointer-events-none cursor-none';

interface PlayersFooterProps {
  page: number;
  setPage: (page: number) => void;
  size: number;
  setSize: (size: number) => void;
  pages?: number;
  players?: number;
  isFirst?: boolean;
  isLast?: boolean;
}

const PlayersFooter = ({
  page,
  setPage,
  size,
  setSize,
  pages,
  players,
  isFirst,
  isLast,
}: PlayersFooterProps) => (
  <div className="flex items-center justify-between border-t border-white/10 bg-gradient-to-b from-white/5 to-white/10 px-4 py-3 sm:px-6">
    <div className="flex flex-1 items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">
          Showing{' '}
          {players ? (
            <>
              <span className="font-medium text-gray-300">
                {1 + page * size}
              </span>{' '}
              to{' '}
              <span className="font-medium text-gray-300">
                {isLast ? players : (page + 1) * size}
              </span>
            </>
          ) : (
            <span className="font-medium text-gray-300">0</span>
          )}{' '}
          of <span className="font-medium text-gray-300">{players || 0}</span>{' '}
          results
        </p>
      </div>
      <div>
        <span className="text-sm text-gray-500">Per page: </span>
        <select
          className="select max-w-xs bg-transparent font-medium text-gray-300 focus:outline-none"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            href="#"
            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-sm font-medium ${
              isFirst || typeof isFirst === 'undefined'
                ? disabled
                : 'text-white'
            }`}
            onClick={() => setPage(0)}
          >
            <span className="sr-only">First</span>
            <svg
              className="h-5 w-5"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FirstPageIcon"
              fill="currentColor"
            >
              <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
            </svg>
          </a>
          <a
            href="#"
            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-sm font-medium  ${
              isFirst || typeof isFirst === 'undefined'
                ? disabled
                : 'text-white'
            }`}
            onClick={() => setPage(isFirst || page === 0 ? 0 : page - 1)}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="NavigateBeforeIcon"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
          </a>
          <div className="flex items-center">
            <p className="text-sm text-gray-500">
              Page <span className="font-medium text-gray-300">{page + 1}</span>{' '}
              of <span className="font-medium text-gray-300">{pages || 1}</span>
            </p>
          </div>
          <a
            href="#"
            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-sm font-medium ${
              isLast || typeof isLast === 'undefined' ? disabled : 'text-white'
            }`}
            onClick={() => {
              if (pages) setPage(isLast ? pages - 1 : page + 1);
            }}
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="NavigateNextIcon"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
          </a>
          <a
            href="#"
            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-sm font-medium ${
              isLast || typeof isLast === 'undefined' ? disabled : 'text-white'
            }`}
            onClick={() => {
              if (pages) setPage(pages - 1);
            }}
          >
            <span className="sr-only">Last</span>
            <svg
              className="h-5 w-5"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="LastPageIcon"
              fill="currentColor"
            >
              <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
);

export default PlayersFooter;
