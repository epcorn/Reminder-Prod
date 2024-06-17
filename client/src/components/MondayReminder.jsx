import { useEffect } from "react";
import { useMondayReminderQuery } from "../redux/userSlice";

function MondayReminder() {
  const { mondayReminder } = useMondayReminderQuery();
  useEffect(() => {
    useMondayReminderQuery();
  }, []);
  return <div>This page is blank</div>;
}

export default MondayReminder;
