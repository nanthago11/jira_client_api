import axios from "axios";

// const url = "http://localhost:8080/rest/api/2/issue/";
// const data = {
//   fields: {
//     project: {
//       key: "TES",
//     },
//     summary: "TEST PROJECT from vs code local",
//     description: "description nantha here",
//     labels: ["model-update-request"],
//     issuetype: {
//       name: "Bug",
//     },
//   },
// };

// const response = axios.post(url, data, {
//   headers: { "content-type": "application/json" },
//   auth: {
//     username: "jira",
//     password: "123qwe",
//   },
// });

// if (response.status === 201) console.log(response.data.id);
// // throw new Error(
// //   `Unknown error in function: jira.createTicket, status code: ${response.status}, text: ${response.data}`
// // );
// // }

//add comment to ticket
// const url = "http://localhost:8080/rest/api/2/issue/10101/comment";
// const data = {
//   body: "created on vs code as a test",
// };

// const response = axios.post(url, data, {
//   headers: { "content-type": "application/json" },
//   auth: {
//     username: "jira",
//     password: "123qwe",
//   },
// });

// if (response.status === 201) return true;
//   throw new Error(
//     `Unknown error in function: jira.addComment, status code: ${response.status}, text: ${response.data}`
//   );
// }

//delete ticket from jira
// const deleteIssue() {
const url = "http://localhost:8080/rest/api/2/issue/10104";
const response = await axios.delete(url, {
  headers: { "content-type": "application/json" },
  auth: {
    username: "jira",
    password: "123qwe",
  },
});

// //   if (response.status === 204) return true;
// //   throw new Error(
// //     `Unknown error in function: jira.deleteIssue, status code: ${response.status}, text: ${response.data}`
// //   );
// // }
