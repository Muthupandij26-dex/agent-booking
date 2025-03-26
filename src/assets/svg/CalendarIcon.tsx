export type SvgImageProps = {
  width?: string;
  height?: string;
  color?: string;
};
const CalendarIcon = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11C1 7.229 1 5.343 2.172 4.172C3.343 3 5.229 3 9 3H13C16.771 3 18.657 3 19.828 4.172C21 5.343 21 7.229 21 11V13C21 16.771 21 18.657 19.828 19.828C18.657 21 16.771 21 13 21H9C5.229 21 3.343 21 2.172 19.828C1 18.657 1 16.771 1 13V11Z"
        stroke="#909EAB"
        stroke-width="1.5"
      />
      <path
        d="M6 3V1.5M16 3V1.5"
        stroke="#909EAB"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M8 13.5L9.5 12V16"
        stroke="#909EAB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.5 8H20.5M12 15V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12C13.2652 12 13.5196 12.1054 13.7071 12.2929C13.8946 12.4804 14 12.7348 14 13V15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16C12.7348 16 12.4804 15.8946 12.2929 15.7071C12.1054 15.5196 12 15.2652 12 15Z"
        stroke="#909EAB"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CalendarIcon;
