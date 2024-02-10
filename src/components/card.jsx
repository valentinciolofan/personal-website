
import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

export default function CardDemo() {
  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ];

  return (
    <div class="w-[380px]">
      <div class="flex items-center space-x-4 rounded-md border p-4">
        <BellIcon />
        <div class="flex-1 space-y-1">
          <p class="text-sm font-medium leading-none">Push Notifications</p>
          <p class="text-sm text-muted-foreground">Send notifications to device.</p>
        </div>
        <div>
          <input type="checkbox" />
        </div>
      </div>
      <div>
        {notifications.map((notification, index) => (
          <div key={index} class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div class="space-y-1">
              <p class="text-sm font-medium leading-none">{notification.title}</p>
              <p class="text-sm text-muted-foreground">{notification.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div class="p-4">
        <button class="w-full flex items-center">
          <CheckIcon class="mr-2 h-4 w-4" /> Mark all as read
        </button>
      </div>
    </div>
  );
}
