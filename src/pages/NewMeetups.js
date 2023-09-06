import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  function handleAddMeetup(meetupData) {
    fetch(
      "https://react-course-584bf-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
}

export default NewMeetupsPage;
