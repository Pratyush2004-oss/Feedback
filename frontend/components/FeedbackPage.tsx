import axios from "axios";
import { DoorOpen, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../constant/api";
import { useAdminStore } from "../store/adminStore";

type FeedbackType = {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
const FeedbackPage = () => {
  const [feedbacks, setfeedbacks] = useState<FeedbackType[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const [showFeedbacks, setshowFeedbacks] = useState<boolean>(false);
  const { admin, logout } = useAdminStore();
  const getAllFeedbacks = async () => {
    try {
      setloading(true);
      const response = await axios.get(`${BASE_API_URL}/api/v1/feedback`);
      setfeedbacks(response.data.feedbacks);
    } catch (error) {
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    admin && getAllFeedbacks();
  }, [admin]);
  return (
    <div className="fkex h-[calc(100vh-117px)] ">
      <div className="h-[64px] flex items-center justify-between px-5 border-b">
        <h1 className="text-xl font-bold">{admin?.email}</h1>
        <button
          className="btn btn-sm btn-outline btn-error transition-all duration-300"
          onClick={logout}
        >
          <DoorOpen className=" size-4" />
          Logout
        </button>
      </div>
      <div className="h-[calc(100vh-180px)] overflow-auto p-5 relative">
        {loading && (
          <div className="h-full flex items-center justify-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        )}
        {!loading && feedbacks.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <p>No feedbacks yet</p>
          </div>
        ) : (
          <>
            {showFeedbacks && (
              <div className="absolute right-5 top-2">
                <button
                  className="btn btn-error btn-sm btn-outline"
                  onClick={() => setshowFeedbacks(false)}
                >
                  <X className="size-5 " />
                </button>
              </div>
            )}
            {!loading && showFeedbacks ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {feedbacks.map((feedback) => (
                  <div
                    key={feedback._id}
                    className="p-5 border rounded-xl relative hover:scale-105 duration-300 transition-all"
                  >
                    <div className="flex items-center justify-between border-b">
                      <h1 className="font-bold">
                        <span className="hidden md:inline">Name: </span>
                        <span className="text-primary">{feedback.name}</span>
                      </h1>
                      <h1 className="text-sm font-bold">
                        <span className="hidden md:inline">Posted At: </span>
                        <span className="text-primary">
                          {feedback.createdAt.split("T")[0]}
                        </span>
                      </h1>
                    </div>
                    <div className="mt-5 gap-3 pb-7">
                      <h1 className="font-bold underline">Feedback:</h1>
                      <p className="text-sm mt-1 text-justify font-medium">
                        {feedback.message}
                      </p>
                    </div>
                    <div className="mt-5 flex justify-end cursor-pointer text-primary absolute bottom-3 right-3 ">
                      <h1 className="text-sm">
                        <span className="font-semibold underline">
                          {feedback.email}
                        </span>
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            ) : !loading && (
              <div className=" flex items-center justify-center h-full flex-col gap-2">
                <button
                  className="btn btn-primary btn-outline btn-sm "
                  onClick={() => setshowFeedbacks(true)}
                >
                  Show Feedbacks
                </button>
                <p className="text-primary text-sm">
                  Click the button to show all feedbacks
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
