import React, { useEffect, useState } from "react";
import TopNavbar from "../Top Navbar/TopNavbar";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/admin/adminUser/action";

const User = () => {
  const [isBlocked, setIsBlocked] = useState(false);
  const user = useSelector((store) => {
    return store.adminUserReducer.person;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  const toggleButton = () => {
    setIsBlocked(!isBlocked);
  };

  return (
    <>
      <Box bgColor={"#eefcec"}>
        <TopNavbar />
        <Heading textAlign={"center"} p={5} color=" #1e7816 ">
          List Of Users
        </Heading>
        <TableContainer
          p={2}
          maxW={"90%"}
          margin={"auto"}
          fontSize={{ base: "12", md: "sm", xl: "md" }}
        >
          <Table variant="striped" bgColor={"white"}>
            <TableCaption color=" #1e7816">LIST OF USERS</TableCaption>
            <Thead>
              <Tr fontSize={{ base: "12", md: "sm", xl: "md" }}>
                <Th color=" #1e7816">NAME</Th>
                <Th color=" #1e7816">EMAIL</Th>
                <Th color=" #1e7816">PHONE</Th>
                <Th color=" #1e7816">GENDER</Th>
                <Th color=" #1e7816">BLOCK</Th>
              </Tr>
            </Thead>
            <Tbody>
              {user.map((item) => {
                return (
                  <Tr key={item._id}>
                    <Td>{item.name}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.phone}</Td>
                    <Td>{item.gender}</Td>
                    <Td>
                      {" "}
                      <Button
                        color=" #1e7816"
                        fontSize={{ base: "10", md: "sm" }}
                        onClick={() => toggleButton(item._id)}
                        disabled={isBlocked}
                      >
                        {isBlocked ? "Blocked" : "Unblocked"}
                      </Button>{" "}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default User;
