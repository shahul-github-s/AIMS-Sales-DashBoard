import React from "react";
import Spring from "@components/Spring"; // Assuming this is a custom animation component
// import BasicCheckbox from "@ui/BasicCheckbox";
import Gallery from "@components/Gallery";

const Notification = ({ data, index, total }) => {
  return (
    <Spring
      className={`border-b pb-4 ${index !== total - 1 ? "" : ""}`}
      type="slideUp"
      index={index}
    >
      <p className="flex items-center gap-4 mb-2">
        {data.read ? (
          <>
            <span className="uppercase text-label text-[14px] font-semibold">
              {data.date}
            </span>
            <span className="text-label">{data.time}</span>
          </>
        ) : (
          <>
            <span className="uppercase text-turquoise text-[14px] font-semibold">
              New
            </span>
            <span className="text-label text-xs font-medium">
              {data.date} {data.time}
            </span>
          </>
        )}
      </p>
      <div className="flex justify-between text-label gap-4">
        <div>
          <p className="text-header text-[15px] font-semibold mb-1">
            {data.title}
          </p>
          <p className="text-xs mb-2">{data.preview}</p>
          {data.type === "order" ? (
            <div className="flex flex-col gap-1 text-xs">
              <p>Customer: {data.customer}</p>
              <p>Amount: ${data.amount.toFixed(2)}</p>
            </div>
          ) : null}
          {data.type === "review" ? (
            <div className="flex flex-col gap-2 items-start text-xs">
              <p className="max-w-[311px]">{data.preview}</p>
              {data.media.length > 0 && <Gallery images={data.media} />}
            </div>
          ) : null}
        </div>
        {/* <BasicCheckbox
          id={data.id}
          labelClass="!border-border !bg-[var(--header-dark)] dark:!bg-widget"
        /> */}
      </div>
    </Spring>
  );
};

const Notifications = () => {
  const [notifications, setNotifications] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchNotifications = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyVu1E78y5755XSEr1Re6Bb0ykPYV7iVFbr8jFbk3W5_u4-uP2YoN82raIeawQjMP58ng/exec"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Filter out notifications with empty fields
      const formattedNotifications = data
        .filter(
          (notification) =>
            notification.date &&
            notification.time &&
            notification.title &&
            notification.preview // Ensure all necessary fields are present
        )
        .map((notification) => ({
          ...notification,
          media: notification.media
            ? [{ src: notification.media, alt: "company logo" }]
            : [],
        }));

      setNotifications(formattedNotifications);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchNotifications(); // Fetch notifications on component mount

    // Optional: Add an interval to periodically refresh notifications
    // const intervalId = setInterval(fetchNotifications, 60000); // e.g., every 60 seconds

    // Cleanup interval on component unmount
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col gap-5 bg-widget w-[288px] h-[475px] rounded-3xl border shadow-lg xs:w-[360px]">
      <div className="flex items-center justify-between p-5 !pb-0 xs:p-6">
        <h2 className="flex items-center gap-2">Notifications</h2>
      </div>
      <div className="overflow-y-auto with-scrollbar">
        <div className="flex flex-col flex-1 gap-4 p-5 !pt-0 xs:p-6">
          {loading ? (
            <p>Loading...</p>
          ) : notifications.length === 0 ? (
            <p>No notifications available.</p>
          ) : (
            notifications.map((notification, index) => (
              <Notification
                key={notification.id}
                data={notification}
                index={index}
                total={notifications.length}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
