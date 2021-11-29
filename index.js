import axios from "axios";

// const url = "https://clear-the-road.atlassian.net/rest/api/2/issue";
// const data = {
//   fields: {
//     project: {
//       key: "MPB",
//     },
//     summary: "TEST PROJECT from vs code",
//     description: "description nantha here",
//     labels: ["model-update-request"],
//     issuetype: {
//       name: "Bug",
//     },
//   },
// }; // data to be sent to the server

// const response = axios.post(url, data, {
//   headers: { "content-type": "application/json" },
//   auth: {
//     username: "nanthago11@gmail.com",
//     password: "zSymt9T3boOgxh8jVtO23FD7",
//   },
// });

// if (response.status === 201) console.log(response.data.id);
// // throw new Error(
//   `Unknown error in function: jira.createTicket, status code: ${response.status}, text: ${response.data}`
// );
// }

//add comment to ticket
// const url =
//   "https://clear-the-road.atlassian.net/rest/api/2/issue/10025/comment";
// const data = {
//   body: "created on vs code as a test",
// };

// const response = axios.post(url, data, {
//   headers: { "content-type": "application/json" },
//   auth: {
//     username: "nanthago11@gmail.com",
//     password: "zSymt9T3boOgxh8jVtO23FD7",
//   },
// });

// if (response.status === 201) return true;
//   throw new Error(
//     `Unknown error in function: jira.addComment, status code: ${response.status}, text: ${response.data}`
//   );
// }

//delete ticket from jira
// const deleteIssue() {
const url = "https://clear-the-road.atlassian.net/rest/api/2/issue/10031";
const response = await axios.delete(url, {
  headers: { "content-type": "application/json" },
  auth: {
    username: "nanthago11@gmail.com",
    password: "zSymt9T3boOgxh8jVtO23FD7",
  },
});

//   if (response.status === 204) return true;
//   throw new Error(
//     `Unknown error in function: jira.deleteIssue, status code: ${response.status}, text: ${response.data}`
//   );
// }
