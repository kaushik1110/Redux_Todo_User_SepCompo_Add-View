import React from "react";
import { connect } from "react-redux";
import Home from "./Home";
const viewUser = (props) => {
  // const { data } = props;
  // const viewUser = () => {
  //   const { posts } = useSelector(state => state)
  console.log(props);
  debugger;
  return (
    <>
      <Home />
      <div className="infotable">
        <h3 className="infoname">User Information</h3>
        <ul>
          {/* {props.todos.map((todo, index) => (
            <div key={index}>{todo.message}</div>
          ))} */}
          {/* <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Type</th>
              </tr>
            </thead> 
            {props.UserTodo.map((todo, index) => (
              <tbody>
                <tr scope="row" key={index}>
                <tr scope="row" >
                  <th>{data.name}</th>
                  <th>{todo.age}</th>
                  <th>{todo.type}</th>
                </tr>
                <tr>
                  <th>Kaushik</th>
                  <th>21</th>
                  <th>Manager</th>
                </tr>
              </tbody>
            ))}
          </table> */}
        </ul>
      </div>
    </>
  );
};
// const mapStateToProps = (state) => ({
//   todos: state.todos,
// });
// // const mapStateToProps = (state) => {
// //   return {
// //     data: state.data,
// //   };
// // };
// export default connect(mapStateToProps)(viewUser);

// import React from 'react'
// import { useSelector } from 'react-redux';
// import HomePage from './HomePage';
// import ManagerDetail from './ManagerDetail';

// const ManagerList = () => {
//     const { posts } = useSelector(state => state)

//     return (
//         <div className="container">
//             <div className="row">
//                 <HomePage />
//                 {posts &&
//                     posts.map((post) =>
//                         <ManagerDetail post={post} key={post.id} />
//                     )}
//             </div>
//         </div>
//     )
// }

export default viewUser;
