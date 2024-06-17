import { useEffect } from "react";
import { useMondayReminderQuery } from "../redux/userSlice";

function MondayReminder() {
  const { data, error, isLoading, refetch } = useMondayReminderQuery();

  useEffect(() => {
    // Refetch data on component mount
    refetch();
  }, [refetch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>This page is blank. Data: {JSON.stringify(data)}</div>;
}

export default MondayReminder;
