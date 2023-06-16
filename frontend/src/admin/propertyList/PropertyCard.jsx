import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/admin/adminProperty/action";
const PropertyCard = ({ image, price, title, id }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const positions = ["top"];
  const handleClick = () => {
    dispatch(deleteProduct(id));
    toast({
      title: `Product Deleted Successfully`,
      position: positions,
      isClosable: true,
    });
  };
  return (
    <div>
      <Card maxW="sm" mt={5} border={"1px solid #1e7816 "} position={"static"}>
        <CardBody>
          <Text
            size="sm"
            maxBlockSize={5}
            textAlign={"center"}
            fontWeight={600}
            color={"#1e7816"}
            mb={2}
          >
            {title}
          </Text>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Text color={"#1e7816"} fontSize="2xl">
              ₹ {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent={"space-between"} justifyItems={"center"}>
          <Button mr="20px" position={"static"} color={"#1e7816"}>
            {" "}
            <Link to={`/edit/${id}`}>Edit</Link>
          </Button>
          <Button position={"static"} color={"#1e7816"} onClick={handleClick}>
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PropertyCard;
