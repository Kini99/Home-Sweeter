import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
  Select,
  Textarea,
  Box,
} from "@chakra-ui/react";
import TopNavbar from "../Top Navbar/TopNavbar";
// import { useDispatch } from "react-redux";
const initialState = {
  image: "",
  owner: "",
  details: "",
  building: "",
  carpet: "",
  status: "",
  furnishing: "",
  facing: "",
  overlooking: "",
  ownership: "",
  bathroom: "",
  balcony: "",
  description: "",
  total_price: "",
  latitude: "",
  longitude: "",
};
const AddProperty = () => {
  const [formState, setFormState] = useState(initialState);
  //   const dispatch = useDispatch();
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];
  const positions = ["top"];
  //!HANDLE CHANGE FUNCTION
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  //! HANDLE SUBMIT FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();
    // ! CHEAKING IF  FIELD IS NOT EMPTY
    if (
      formState.image === "" ||
      formState.building === "" ||
      formState.ownership === "" ||
      formState.facing === ""
    ) {
      toast({
        title: "Please Add The Information",
        position: positions,
        status: statuses[2],
        isClosable: true,
      });
    } else {
      //! ALLCLEAR GO FURTHER
      console.log(formState);
      //   dispatch(addProduct(formState));
      setFormState(initialState);

      toast({
        title: " Product Added Successfully",
        position: positions,
        status: statuses[0],
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Box bgColor={"#eefcec"}>
        <TopNavbar />
        <Container
          maxW="container.md"
          border="1px"
          borderColor="#1e7816"
          bgColor={"white"}
          p={"20px"}
          mt={"30px"}
          mb={5}
        >
          <FormControl>
            <Heading mb={"10px"} color={"#1e7816"} textAlign={"center"}>
              Add Property 
            </Heading>
            <FormLabel m={"10px"}>Image URL</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={formState.image}
              placeholder="Image"
              size="md"
              name="image"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Owner Name</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={formState.owner}
              placeholder="Owner Name"
              size="md"
              name="owner"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Details</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={formState.details}
              placeholder="Details"
              size="md"
              name="details"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Building Name</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={formState.building}
              placeholder="Building Name"
              size="md"
              name="building"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Carpet Area</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="number"
              value={formState.carpet}
              placeholder="Carpet Area"
              size="md"
              name="carpet"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Status</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={formState.status}
              placeholder="Status"
              size="md"
              name="status"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Furnishing</FormLabel>
            <Select
              placeholder="Select"
              border={"1px solid #1e7816 "}
              name="furnishing"
              onChange={handleChange}
            >
              <option value="SemiFurnished">Semi-Furnished</option>
              <option value="FullyFurnished">Fully-Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </Select>
            <FormLabel m={"10px"}>facing</FormLabel>
            <Select
              placeholder="Select"
              border={"1px solid #1e7816 "}
              name="facing"
              onChange={handleChange}
            >
              <option value="east">East</option>
              <option value="west">West</option>
              <option value="north">North</option>
              <option value="south">South</option>
            </Select>
            <FormLabel m={"10px"}>overlooking</FormLabel>
            <Select
              placeholder="Select"
              border={"1px solid #1e7816 "}
              name="overlooking"
              onChange={handleChange}
            >
              <option value="garden">Garden</option>
              <option value="main-road">Main-Road</option>
              <option value="mall">Mall</option>
              <option value="city-center">City-Center</option>
            </Select>
            <FormLabel m={"10px"}>ownership</FormLabel>
            <Select
              placeholder="Select"
              border={"1px solid #1e7816 "}
              name="ownership"
              onChange={handleChange}
            >
              <option value="Freehold">Freehold</option>

              <option value="Co-operative Society">Co-operative Society</option>
            </Select>
            <FormLabel m={"10px"}>Bathroom</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="number"
              value={formState.bathroom}
              placeholder="Bathroom"
              size="md"
              name="bathroom"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Balcony</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="number"
              value={formState.balcony}
              placeholder="Balcony"
              size="md"
              name="balcony"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Total Price</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={formState.total_price}
              placeholder="Total Price"
              size="md"
              name="total_price"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Latitude</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="number"
              value={formState.latitude}
              placeholder="Latitude"
              size="md"
              name="latitude"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Longitude</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="number"
              value={formState.longitude}
              placeholder="Longitude"
              size="md"
              name="longitude"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Description</FormLabel>
            <Textarea
              border={"1px solid #1e7816 "}
              value={formState.description}
              placeholder="Description"
              name="description"
              onChange={handleChange}
              mb={"10px"}
              rows="10"
              cols="95"
            ></Textarea>
            <Button
              onClick={handleSubmit}
              colorScheme="green"
              variant="outline"
              display={"block"}
              size="md"
              w={"20%"}
              m={"auto"}
              mt={"20px"}
            >
              Add Product
            </Button>
          </FormControl>
        </Container>
      </Box>
    </>
  );
};

export default AddProperty;
