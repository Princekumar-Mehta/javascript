// let user = {
//     name: "John Smith",
//     age: 35
//   };

//   let user_json = JSON.stringify(user);
//   console.log(user_json);

//   let user_obj = JSON.parse(user_json);
//   console.log(user_obj);



  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };

  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;

  alert( JSON.stringify(meetup, function replacer(key, value) {
    if(key!=""&&value==meetup){
        return undefined;
    }else{
        return value;
    }
  }));

  /* result should be:
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */
