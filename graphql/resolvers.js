export default {
  Query: {
    users: () => users,
    user: (root, { id }) => users[id],
    messages: () => messages,
    // message: (root, { userid }) => //implement later on the db. . .
    count: () => {
      console.log('count called')
      return 2
    }
  },
  Mutation: {
    //just for testing!
    addUser: (root, { name, password } ) => {
      return {id:999, name, password}
    },
    addMessage: (root, { user, text} ) => { 
      return {id: 888, user, text, date: new Date() }
    }
  }
}

//UNNEEDED - REMOVE THIS ONCE DB IS SET UP
//dummy data - mock database
const count = 2
const testuser = {
  id: 1,
  name: 'testUser',
  password: 'illneverbeused'
};
const users = [testuser];
const testmessage = {
  id: 1,
  user: 1,
  date: new Date(),
  text: 'success success success'
};
const testmessage2 = {
  id: 2,
  user: 1,
  date: new Date(),
  text: 'win win win'
};
const messages = [testmessage, testmessage2];



//REFERENCE: POSTGRES resolvers

// export default {
//   Query: {
//     hello: (p, { input }, context) => input,
//     loginMember: (p, { input }, { models }) => 
//       models.Member.findOne({
//         where: {
//           name: input.name,
//           password: input.password,
//         },
//       }),

//     getMemberByName: (p, { name }, { models }) => 
//       models.Member.findOne({
//         where: {
//           name: name
//         },
//       }),
      
//     getMemberById: (p, { id }, { models }) =>
//       models.Member.findOne({
//         where: {
//           id: id
//         }
//       }),
    
//     getMembersByBollyId: (p, { bollyid }, { models }) =>
//       models.Member.findAll({
//         where: {
//           bollyid,
//         }
//       }),

//     allMembers: (p, a, { models }) => models.Member.findAll(),
//     allBollies: (p, a, { models }) => models.Bolly.findAll(),
//     getMessagesByBollyId: (p, { bollyid }, { models }) =>
//       models.Message.findAll({
//         where: {
//           bollyid: bollyid
//         }
//       }),

//     allMessages: (p, a, { models}) => models.Message.findAll(),

//   },

//   Mutation: {
//     createMember: (p, { input }, { models }) => models.Member.create(input),
//     findOrCreateMember: (p, a, { models }) => models.Member.findOrCreate(a),
//     joinBolly: (p, { id, bollyid }, { models }) => {
//       models.Member.findOne({
//         where: {
//           id: id
//         }
//       }).then(member => member.updateAttributes({
//         // where: {
//           bollyid: bollyid
//         // }
//       }))
//     },

//     deleteMemberById: (p, { id }, { models }) => 
//       models.Member.destroy({
//         where: {
//           id: id
//       }}),

//     createBolly: (p, { input }, { models }) => models.Bolly.create(input),
//     updateBollyTimeById: (p, { id, streamtime }, { models }) =>
//       models.bollyid.findOne({
//         where: {
//           id: 1
//         }
//       }).then((bollyid) => {
//         bollyid.update({
//           streamTime: streamtime
//         })
//       }),


//     createMessage: (p, { input }, { models }) => models.Message.create(input),

//     deleteMessageById: (p, { id }, { models }) => 
//       models.Message.destroy({ 
//         where: {
//           id: id
//       }}),

//     deleteAllMessagesByid: (p, { id }, { models }) => 
//       models.Message.findAll({
//         where: {
//           id,
//         }
//       }).then((members) => {
//         members.forEach((member) => {
//           member.destroy();
//         })
//       })

//   },
// };


