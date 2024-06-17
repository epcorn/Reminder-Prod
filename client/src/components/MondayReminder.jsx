import { useEffect } from "react";
import { useMondayReminderQuery } from "../redux/userSlice";

function MondayReminder() {
  const { mondayReminder } = useMondayReminderQuery();
  useEffect(() => {
    async function fn() {
      await useMondayReminderQuery();
    }
    fn();
  }, []);
  return <div>This page is blank</div>;
}

export default MondayReminder;
