function cars(manufacturer,model_name,...other_features)
{
    var car_obj = 
    {
        Maunfacturer :   manufacturer,
        Model_name :     model_name,
        other_features:{}
    };
    for (var i = 0; i < other_features.length; i++)
     {
      var feature = other_features[i];
      for (var prop in feature) 
      {
        car_obj.other_features[prop] = feature[prop];
      }
      };
    return car_obj;
}
var car=cars('Honda','City',{color : 'yellow'},{year : '2022'},{Engine : 'Full option '});
console.log(car);
