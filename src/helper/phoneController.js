import PhoneList from "./phoneDummy"

const filterPhoneList = (
  PhoneList,
  allowedDeviceType,
  allowedManufacturer,
  allowedOperationArea,
  isFavorite,
  isRental,
  allowedPrice,
  allowedWeight,
) => {
  return PhoneList.bigPhoneList.filter(phone => {
    const passFav = isFavorite === phone.isFavorite
    const passRent = isRental === phone.isRental
    const passAll = isFavorite === false && isRental === false

    const passDeviceType = allowedDeviceType?.length ? allowedDeviceType?.includes(phone.deviceType) : true
    const passOperationArea = allowedOperationArea?.length ? allowedOperationArea?.includes(phone.operationArea) : true;
    const passManufacturer = allowedManufacturer?.length ? allowedManufacturer?.includes(phone.manufacturer) : true
    const passPrice = !!allowedPrice ? parseInt(allowedPrice[0]) <= parseInt(phone.price) && parseInt(phone.price) <= parseInt(allowedPrice[1]) : true
    const passWeight = !!allowedWeight ? parseInt(allowedWeight[0]) <= parseInt(phone.weight) && parseInt(phone.weight) <= parseInt(allowedWeight[1]) : true

    return !passAll ? passDeviceType
      && passManufacturer
      && passOperationArea
      && passFav
      && passRent
      && passPrice
      && passWeight
      :
      passDeviceType
      && passManufacturer
      && passOperationArea
      && passPrice
      && passWeight
  });
};

const getPhone = (props) => {
  const isFavorite = props?.selection?.includes(2)
  const isRental = props?.selection?.includes(3)
  const deviceTypeParam = props?.deviceType
  const manufacturerParam = props?.manufacturer
  const operationAreaParam = props?.operationArea
  const priceParam = props?.price
  const weightParam = props?.weight

  const filteredPhoneList = filterPhoneList(
    PhoneList,
    deviceTypeParam,
    manufacturerParam,
    operationAreaParam,
    isFavorite,
    isRental,
    priceParam,
    weightParam,
  )
  return filteredPhoneList
}


export default getPhone