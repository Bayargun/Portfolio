export const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 py-20 mx-auto text-center"
    >
      <div className="mb-6">
        <span className="px-4 py-1 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium">
          Get in touch
        </span>
      </div>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Хэрэв та хөгжүүлэгч хайж байгаа эсвэл зүгээр л холбогдохыг хүсэж байвал
        надтай чөлөөтэй холбогдоорой.
      </p>
      <div className="flex flex-col gap-6 items-center mb-12">
        <div className="flex items-center gap-3 text-lg font-semibold text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.82 8.91A2.25 2.25 0 012.75 6.993V6.75"
            />
          </svg>
          <span>bayargun.bayargun@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-lg font-semibold text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.36-.966-.868-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.388a12.035 12.035 0 01-7.143-7.143c-.154-.441.012-.928.388-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.118A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <span>+976 89740410</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm text-gray-500">
          Мөн та намайг эдгээр платформ дээрээс олж болно!
        </p>
        <div className="flex gap-6 text-gray-600">
          <a
            href="https://github.com/Bayargun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12a11.999 11.999 0 008.207 11.387c.6.111.793-.261.793-.579v-2.056c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.729.083-.729 1.205.085 1.84 1.234 1.84 1.234 1.072 1.835 2.811 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.303-5.466-1.333-5.466-5.932 0-1.311.469-2.381 1.235-3.222-.124-.303-.535-1.523.118-3.176 0 0 1.007-.322 3.301 1.229a11.486 11.486 0 016.006 0c2.293-1.551 3.299-1.229 3.299-1.229.654 1.653.243 2.873.119 3.176.768.841 1.235 1.911 1.235 3.222 0 4.609-2.803 5.626-5.475 5.922.431.371.815 1.102.815 2.222v3.293c0 .32.192.694.801.576A12 12 0 0024 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
