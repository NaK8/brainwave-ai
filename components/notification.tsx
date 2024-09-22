import { notification1 } from "@/assets";
import { notificationImages } from "@/constants";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface NotificationProps {
  className?: string;
  title?: string;
}

const Notification = ({ className, title }: NotificationProps) => {
  return (
    <div
      className={twMerge(
        `flex items-center gap-5 rounded-2xl border border-n-1/10 bg-n-9/40 p-4 pr-6 backdrop-blur`,
        className,
      )}
    >
      <Image
        src={notification1}
        alt="image"
        height={62}
        width={62}
        className="rounded-2xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 text-base font-semibold">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="-m-0.5 flex">
            {notificationImages.map((item, i) => (
              <li
                key={i}
                className="flex size-6 overflow-hidden rounded-full border-2 border-n-12"
              >
                <Image
                  src={item}
                  alt="item"
                  height={20}
                  width={20}
                  className="w-full"
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
