import React, { useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';
import { Box, Typography, Button, Stack, Grid, Card, CardMedia, CardContent, CardHeader, Badge } from '@mui/material'
import FilterButton from './FilterButton';
import SliderFilter from './SliderFilter';
import { SELECTION_FILTER, DEVICE_TYPE_FILTER, MANUFACTURER_FILTER, OPERATION_AREA_FILTER } from '../constants';
import getPhone from '../helper/phoneController';
import debounce from "lodash.debounce"
import ExpandingCard from './ExpandingCard';
import PhoneDetail from './PhoneDetail';



const MobileDevicePage = () => {
  const [selectionFilter, setSelectionFilter] = useState(SELECTION_FILTER)
  const [deviceTypeFilter, setDeviceTypeFilter] = useState(DEVICE_TYPE_FILTER)
  const [manufacturerFilter, setManufacturerFilter] = useState(MANUFACTURER_FILTER)
  const [operationAreaFilter, setOperationAreaFilter] = useState(OPERATION_AREA_FILTER)
  const [listPriceFilter, setListPriceFilter] = useState([0, 3500])
  const [weightFilter, setWeightFilter] = useState([35, 1300])

  const [phoneListData, setPhoneListData] = useState([])
  const [hideFilters, setHideFilters] = useState(true)
  const [accumulateFilter, setAccumulateFilter] = useState({})
  const [isSelected, setIsSelected] = useState({})

  const onSliderChange = (props) => {
    handleSetFilter('_', props?.variant, '_', props?.newValue)
  }

  const fetchPhones = () => {
    setPhoneListData(getPhone(accumulateFilter))
  }


  const theme = createTheme({
    transitions: {
      duration: {
        standard: 300,

      },
    },
  })

  const remapSelectionFilter = (index, currStatus) => {
    const id = index + 1;
    const newStatus = currStatus === 'inactive' ? 'active' : 'inactive';

    const updatedSelectionFilter = [...selectionFilter];

    if (id === 1 && newStatus === 'active') {
      updatedSelectionFilter.forEach(item => {
        if (item.id !== 1) item.status = 'inactive';
        else if (item.id === 1) item.status = 'active'
      });
    }
    else if (updatedSelectionFilter[1].status === 'inactive' && id === 2 && newStatus === 'active') {
      updatedSelectionFilter[1].status = 'active';
      updatedSelectionFilter[0].status = 'inactive';
    } else if (updatedSelectionFilter[2].status === 'inactive' && id === 3 && newStatus === 'active') {
      updatedSelectionFilter[2].status = 'active';
      updatedSelectionFilter[0].status = 'inactive';
    }
    else if ((id === 2 || id === 3) && newStatus === 'inactive') {
      if (updatedSelectionFilter[1].status === 'active' && id === 2) {
        updatedSelectionFilter[1].status = 'inactive';
        updatedSelectionFilter[0].status = 'inactive';
        if (updatedSelectionFilter[1].status === 'inactive' && updatedSelectionFilter[2].status === 'inactive') {
          updatedSelectionFilter[0].status = 'active';
        }
      } else if (updatedSelectionFilter[2].status === 'active' && id === 3) {
        updatedSelectionFilter[2].status = 'inactive';
        updatedSelectionFilter[0].status = 'inactive';
        if (updatedSelectionFilter[2].status === 'inactive' && updatedSelectionFilter[1].status === 'inactive') {
          updatedSelectionFilter[0].status = 'active';
        }
      }
    }
    else if (updatedSelectionFilter[0].status === 'inactive' && updatedSelectionFilter[1].status === 'inactive' && updatedSelectionFilter[2].status === 'inactive') {
      updatedSelectionFilter[0].status = 'active';
      updatedSelectionFilter[1].status = 'inactive';
      updatedSelectionFilter[2].status = 'inactive';
    }
    else if (updatedSelectionFilter[0].status === 'inactive' && updatedSelectionFilter[1].status === 'inactive' && updatedSelectionFilter[2].status === 'inactive') {
      updatedSelectionFilter[0].status = 'active';
      updatedSelectionFilter[1].status = 'inactive';
      updatedSelectionFilter[2].status = 'inactive';
    }
    else {
      console.log('error in selection filter');
    }

    return updatedSelectionFilter;
  }

  const handleDisableFilterButton = () => {
    //cek dvice type
    if (accumulateFilter?.deviceType?.length === 0) {
      const availableDeviceType = phoneListData.map(phoneList => phoneList.deviceType)
      const pepe = [...new Set(availableDeviceType)];
      const excludedDeviceType = DEVICE_TYPE_FILTER.map((deviceTypeDictionary) => pepe.includes(deviceTypeDictionary.id))
      if (excludedDeviceType.includes(false)) {
        const disabledDeviceTypedIds = excludedDeviceType.map((e, i) => e === false ? i + 1 : '').filter(String)
        console.log('disabled deviceType id (delayed by 1 state)' + disabledDeviceTypedIds)

        const nextFilter = deviceTypeFilter.map(item => ({
          ...item,
          status: disabledDeviceTypedIds.includes(item.id) ? "disabled" : item.status
        }));
        // setDeviceTypeFilter(nextFilter);
      }
      else {
        const nextFilter = deviceTypeFilter.map(item => ({
          ...item,
          status: 'inactive'
        }));
        // setDeviceTypeFilter(nextFilter);
      }
    }

    //cek manufacturer
    if (accumulateFilter?.manufacturer?.length === 0) {
      const availableManufacturer = phoneListData.map(phoneList => phoneList.manufacturer)
      const pepe = [...new Set(availableManufacturer)];
      const excludedManufacturer = MANUFACTURER_FILTER.map((manufacturerDictionary) => pepe.includes(manufacturerDictionary.id))
      if (excludedManufacturer.includes(false)) {
        const disabledManufacturerIds = excludedManufacturer.map((e, i) => e === false ? i + 1 : '').filter(String)
        console.log('disabled mannuf id (delayed by 1 state)' + disabledManufacturerIds)
      }
    }

    //cek operation area
    if (accumulateFilter?.operationArea?.length === 0) {
      const availableOperationArea = phoneListData.map(phoneList => phoneList.operationArea)
      const pepe = [...new Set(availableOperationArea)];
      const excludedOperationArea = OPERATION_AREA_FILTER.map((operationAreaDictionary) => pepe.includes(operationAreaDictionary.id))
      if (excludedOperationArea.includes(false)) {
        const disabledOperationAreaIds = excludedOperationArea.map((e, i) => e === false ? i + 1 : '').filter(String)
        console.log('disabled operation area id (delayed by 1 state)' + disabledOperationAreaIds)
      }
    }

  }

  const handleSetFilter = (index, filterName, currStatus, newSliderValue) => {
    const newStatus = currStatus === 'inactive' ? 'active' : 'inactive'
    setIsSelected(null)
    switch (filterName) {
      case 'selection':
        const nextSelection = remapSelectionFilter(index, currStatus)
        setSelectionFilter(nextSelection)
        break;

      case 'deviceType':
        const nextDeviceType = deviceTypeFilter.map(deviceType => {
          if (index + 1 === deviceType.id) { //if id is same, change
            return {
              ...deviceType,
              status: newStatus,
            };
          } else { //id different, change nothing
            return deviceType
          }
        });
        setDeviceTypeFilter(nextDeviceType)
        break;

      case 'manufacturer':
        const nextManufacturer = manufacturerFilter.map(manufacturer => {
          if (index + 1 === manufacturer.id) { //if id is same, change
            return {
              ...manufacturer,
              status: newStatus,
            };
          } else { //id different, change nothing
            return manufacturer
          }
        });
        setManufacturerFilter(nextManufacturer)
        break;

      case 'operationArea':
        const nextOperationArea = operationAreaFilter.map(operationArea => {
          if (index + 1 === operationArea.id) { //if id is same, change
            return {
              ...operationArea,
              status: newStatus,
            };
          } else { //id different, change nothing
            return operationArea
          }
        });
        setOperationAreaFilter(nextOperationArea)
        break;


      case 'price':
        const nextPrice = newSliderValue
        setListPriceFilter(nextPrice)
        break;

      case 'weight':
        const nextWeight = newSliderValue
        setWeightFilter(nextWeight)
        break;

      default: console.log('no filterName detected')
    }

  }

  const handleToggleHideSomeFilters = () => {
    setHideFilters(!hideFilters)
  }

  const handleResetFilter = () => {
    setIsSelected(null)
    remapSelectionFilter(0, 'inactive')
    setDeviceTypeFilter(DEVICE_TYPE_FILTER)
    setManufacturerFilter(MANUFACTURER_FILTER)
    setOperationAreaFilter(OPERATION_AREA_FILTER)
    setListPriceFilter([0, 3500])
    setWeightFilter([0, 1300])
  }

  const onSelect = (props, gridIndex) => {
    setIsSelected({ props, gridIndex })
  }

  const handleFilterButtonclick = (index, bla, currStatus) => {
    handleSetFilter(index, bla, currStatus)
    handleDisableFilterButton() //delayed
  }

  useEffect(() => {
    const a = selectionFilter
      .filter(selection => selection.status === 'active')
      .map(item => item.id)
    const b = deviceTypeFilter
      .filter(deviceType => deviceType.status === 'active')
      .map(item => item.id)
    const c = manufacturerFilter
      .filter(manufacturer => manufacturer.status === 'active')
      .map(item => item.id)
    const d = operationAreaFilter
      .filter(operationArea => operationArea.status === 'active')
      .map(item => item.id)
    const e = listPriceFilter
    const f = weightFilter

    const mergedObject = {
      'selection': a,
      'deviceType': b,
      'manufacturer': c,
      'operationArea': d,
      'price': e,
      'weight': f,
    };

    setAccumulateFilter(mergedObject)
  }, [selectionFilter, deviceTypeFilter, manufacturerFilter, operationAreaFilter, listPriceFilter, weightFilter])

  useEffect(() => {
    const debouncedFetchPhones = debounce(() => {
      fetchPhones();
    }, 100);

    debouncedFetchPhones();

    return () => {
      debouncedFetchPhones.cancel();
    };
  }, [accumulateFilter])

  return (
    <>
      {/* header */}
      <Box sx={{ display: { xs: 'none', md: 'inherit' } }}>
        <div style={{ textAlign: "center", width: "50%", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", paddingTop: 80 }}>
          <div style={{ display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "center", margin: "0 auto", position: "relative" }}>
            <div style={{ padding: "20px", textAlign: "left", position: 'absolute', marginRight: 280 }}>
              <Typography fontSize={56} flexWrap={'nowrap'} zIndex={200}>
                <p>How do I find the</p>
                <p style={{ textDecoration: 'underline' }}>best mobile devices</p>
                <h1>for my employees?</h1>
              </Typography>
            </div>
            <div>
              <img src="https://ontego.de/images/commsult/content/A.1.3/A.1.3_01_M1_Intro@2x.jpg"
                alt="Image Description"
                style={{ width: '620px', height: 'auto', marginLeft: 300, opacity: 0.8 }}
              />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "20px", width: '33%', margin: 'auto', paddingBottom: 120, paddingTop: 80 }}>
          <p>Mobile applications are now part of everyday life in companies: in production, warehouse logistics, maintenance or delivery. We give you an overview of mobile hardware from handheld computers to mobile scanners, forklift terminals and tablets to robust smartphones and mobile printers.</p>
        </div>
      </Box>

      <Box sx={{ display: { xs: 'inherit', md: 'none' } }}>
        <div style={{ textAlign: "center", width: "80%", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", paddingTop: 80 }}>
          <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center", margin: "0 auto", position: "relative" }}>
            <div style={{ textAlign: "left", position: 'relative', paddingBottom: 10 }}>
              <Typography fontSize={40} flexWrap={'nowrap'} zIndex={200}>
                <p>How do I find the</p>
                <p style={{ textDecoration: 'underline' }}>best mobile devices</p>
                <h1>for my employees?</h1>
              </Typography>
            </div>
            <div>
              <img src="https://ontego.de/images/commsult/content/A.1.3/A.1.3_01_M1_Intro@2x.jpg"
                alt="Image Description"
                style={{ width: '620px', height: 'auto' }}
              />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "20px", width: '80%', margin: 'auto', paddingBottom: 120, paddingTop: 80 }}>
          <p>Mobile applications are now part of everyday life in companies: in production, warehouse logistics, maintenance or delivery. We give you an overview of mobile hardware from handheld computers to mobile scanners, forklift terminals and tablets to robust smartphones and mobile printers.</p>
        </div>
      </Box>

      <Box sx={{ display: { xs: 'inherit', md: 'none' } }}>
        <div style={{ textAlign: "center", width: "80%", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", paddingTop: 40, paddingBottom:60 }}>
          <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center", margin: "0 auto", position: "relative" }}>
            <div style={{ textAlign: "left", position: 'relative', paddingBottom: 10 }}>
              <Typography fontSize={32} flexWrap={'nowrap'} zIndex={200}>
              Unfortunately we don't have enough space here...
              </Typography>
              ... for our hardware finder. But feel free to visit this page while having your morning coffee at work and browse through recommendations, overviews and helpful links to the latest mobile devices.
            </div>
            <div>
              <img src="https://ontego.de/images/commsult/content/A.1.3/A.1.3_02_Hardware_Finder.jpg"
                alt="Image Description"
                style={{ width: '620px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'inherit' } }}>
        <Box
          style={{ background: '#F5F5F5', margin: 'auto', borderRadius: 20, paddingTop: 50, paddingBottom: 20, paddingLeft: 30 }} width={'60vw'}>
          {/* //////////////////////////SELECTION */}
          <Box>
            <Stack spacing={2} direction="row" paddingBottom={4} justifyContent={'center'}>
              <Typography>
                Selection
              </Typography>
              {
                SELECTION_FILTER.map((selection, index) => {
                  return (
                    <FilterButton
                      label={selection?.label}
                      status={selectionFilter[index].status}
                      onClick={() => {
                        handleSetFilter(index, 'selection', selectionFilter[index].status)
                      }
                      }
                    />
                  )
                })
              }
            </Stack>
          </Box>

          {/* //////////////////////////DEVICE TYPE */}
          <Box>
            <Stack spacing={2} direction="row" paddingBottom={4} justifyContent={'center'}>
              <Typography>
                Device Type
              </Typography>
              <Box sx={{ maxWidth: '80%' }}>
                {
                  DEVICE_TYPE_FILTER.map((deviceType, index) => {
                    return (
                      <FilterButton
                        label={deviceType?.label}
                        status={deviceTypeFilter[index].status}
                        onClick={() => {
                          handleFilterButtonclick(index, 'deviceType', deviceTypeFilter[index].status)
                        }}
                      />
                    )
                  })
                }
              </Box>
            </Stack>
          </Box>
          {!hideFilters ?
            <>
              {/* //////////////////////////MANUFACTURER */}
              <Box>
                <Stack spacing={2} direction="row" paddingBottom={4} justifyContent={'center'}>
                  <Typography>
                    Manufacturer
                  </Typography>
                  <Box sx={{ maxWidth: '80%' }}>
                    {
                      MANUFACTURER_FILTER.map((manufacturer, index) => {
                        return (
                          <FilterButton
                            label={manufacturer?.label}
                            status={manufacturerFilter[index].status}
                            onClick={() => {
                              handleFilterButtonclick(index, 'manufacturer', manufacturerFilter[index].status)
                            }
                            }
                          />
                        )
                      })
                    }
                  </Box>
                </Stack>
              </Box>

              {/* //////////////////////////OPERATION AREA */}
              <Box>
                <Stack spacing={2} direction="row" paddingBottom={4} justifyContent={'center'}>
                  <Typography>
                    Operation Area
                  </Typography>
                  <Box sx={{ maxWidth: '80%' }}>
                    {
                      OPERATION_AREA_FILTER.map((operationArea, index) => {
                        return (
                          <FilterButton
                            label={operationArea?.label}
                            status={operationAreaFilter[index].status}
                            onClick={() => handleFilterButtonclick(index, 'operationArea', operationAreaFilter[index].status)}
                          />
                        )
                      })
                    }
                  </Box>
                </Stack>
              </Box>

              <Box justifyContent={'center'} margin={'auto'} sx={{ display: "flex", flexDirection: 'row', alignItems: "center", }}>
                <Stack spacing={8} direction="row" paddingBottom={6}>
                  {/* //////////////////////////LIST PRICE */}
                  <SliderFilter variant="price" min={listPriceFilter[0]} max={listPriceFilter[1]} value={listPriceFilter}
                    onSliderChange={onSliderChange}
                  />
                  {/* //////////////////////////WEIGHT */}
                  <SliderFilter variant="weight" min={weightFilter[0]} max={weightFilter[1]} value={weightFilter}
                    onSliderChange={onSliderChange}
                  />
                </Stack>
              </Box>
            </> : <></>
          }

          <Box justifyContent={'center'} margin={'auto'} sx={{ display: "flex", flexDirection: 'row', alignItems: "center", }}>
            <Stack direction="row" gap={28}>
              All information/prices without guarantee
              <Box>
                <Button sx={{ marginRight: 8 }} onClick={handleResetFilter}>Reset Filter</Button>
                <Button onClick={handleToggleHideSomeFilters}>{!hideFilters ? 'Hide Filters' : 'Show More Filters'}</Button>
              </Box>
            </Stack>
          </Box>
        </Box>


        <Box justifyContent={'center'} style={{ margin: 'auto', borderRadius: 20, paddingTop: 50, paddingBottom: 20 }} width={'60vw'}>
          <Grid container direction="row" justifyContent="center" width={'60vw'} margin={'auto'}>
            {
              phoneListData.map((phoneData, index) => {
                return (
                  <>
                    <Grid item width={'15vw'} paddingBottom={4}
                      style={{
                        transition: theme.transitions.create("all", {
                          easing: theme.transitions.easing.sharp,
                          duration: theme.transitions.duration.leavingScreen,
                        })
                      }} >
                      <Box sx={{ position: 'absolute' }}>
                        {phoneData.isFavorite && <Badge sx={{ bgcolor: '#05689D', color: 'white', borderRadius: 10, paddingX: 2, marginRight: 2, marginLeft: 'auto' }}>
                          Favorite
                        </Badge>}

                        {phoneData.isRental && <Badge sx={{ bgcolor: '#D1B704', color: 'white', borderRadius: 10, paddingX: 3 }}>
                          Rental
                        </Badge>}
                      </Box>

                      <Card onClick={() => onSelect(phoneData, index)} sx={{ cursor: 'pointer', margin: '8px', border: 'none', boxShadow: 'none' }} >
                        <CardMedia
                          component="img"
                          height="255"
                          image={phoneData.imgUrl}
                          alt="phone image"
                        />
                        <CardContent sx={{ paddingX: 1 }}>
                          <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                            {phoneData.name}
                          </Typography>
                        </CardContent>
                      </Card>
                      {(index) % 4 === 0 && isSelected?.props?.id && isSelected?.gridIndex > index - 1 && isSelected?.gridIndex < index + 4 && (
                        <>
                          <PhoneDetail
                            onClose={() => setIsSelected(null)}
                            selectedPhoneData={isSelected?.props}
                            style={{
                              transition: theme.transitions.create("all", {
                                easing: theme.transitions.easing.sharp,
                                duration: theme.transitions.duration.leavingScreen,
                              })
                            }} />
                        </>
                      )}
                    </Grid>
                  </>
                )
              })
            }
          </Grid>
        </Box>

      </Box>
    </>
  );
}

export default MobileDevicePage;
