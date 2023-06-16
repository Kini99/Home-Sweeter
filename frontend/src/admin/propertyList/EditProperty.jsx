import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../../Redux/admin/adminProperty/action";

const EditProperty = () => {
  const { id } = useParams();
  const [item, setItem] = useState("");
  const toast = useToast();
  const positions = ["top"];
  const dispatch = useDispatch();
  const { property } = useSelector((store) => {
    return store.adminPropertyReducer;
  });

  useEffect(() => {
    const data = property.find((el) => el.id == +id);
    setItem(data);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(item, id));
    toast({
      title: `Product Edit Successfully`,
      position: positions,
      isClosable: true,
    });
  };
  return (
    <>
      <Container
        maxW="container.md"
        border="1px"
        borderColor="gray.400"
        p={"20px"}
        mt={"20px"}
        mb={5}
      >
        <Heading mb={"10px"} textAlign={"center"}>
          {" "}
          Edit Product : {id}
        </Heading>
        <FormControl>
          <FormLabel m={"10px"}>Image URL</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value={item.image}
            placeholder="image"
            size="md"
            name="image"
            onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Title</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value={item.title}
            placeholder="title"
            size="md"
            name="title"
            onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Price</FormLabel>
          <Input
            border="1px solid gray"
            type="number"
            value={item.price}
            placeholder="price"
            size="md"
            name="Price"
            onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Gender</FormLabel>
          <Select
            border="1px solid gray"
            placeholder="Gender"
            size="md"
            value={item.category}
            name="gender"
            onChange={handleChange}
            mt={"10px"}
          >
            <option value={"mens"}>Male</option>
            <option value={"womens"}>Female</option>
          </Select>
          <Button
            onClick={handleSubmit}
            colorScheme="teal"
            variant="outline"
            size="md"
            display={"block"}
            w={"20%"}
            m={"auto"}
            mt={"20px"}
          >
            Submit
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditProperty;
