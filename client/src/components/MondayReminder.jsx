import { useEffect } from "react";
import { useMondayReminderQuery } from "../redux/userSlice";

function MondayReminder() {
  const { mondayReminder } = useMondayReminderQuery();
  useEffect(() => {
    async function fn() {
      try {
        await useMondayReminderQuery();
      } catch (error) {
        console.log(error);
      }
    }
    fn();
  }, []);
  return <div>This page is blank</div>;
}

export default MondayReminder;
