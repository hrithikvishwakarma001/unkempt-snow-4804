import React from "react";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Center,
	Input,
	Badge,
	useColorModeValue,
} from "@chakra-ui/react";
import { DateContext } from "../../context/DateProviderContext";
import DateRangePickerComp from "./DateRangePickerComp";
// import Icon from "react-icon";
import { AiFillCalendar } from "react-icons/ai";
export default function InputDateRange() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { sDate, eDate } = React.useContext(DateContext);
	return (
		<>
			{/* <Button onClick={onOpen}>Open Modal</Button> */}
			<Input
				onClick={onOpen}
				type={"text"}
				bg
				value={sDate}
				h={"50px"}
				borderRadius={"0"}
			/>
			<AiFillCalendar
				size={"10%"}
				borderRadius={"50%"}
				color={useColorModeValue("black", "white")}
				onClick={onOpen}
			/>
			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset='slideInBottom'
				bg={useColorModeValue("gray.100", "black")}
				size='5xl'>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontSize={"lg"}>
						<Badge colorScheme='purple'>
							Start Date {` : ${sDate}`}
						</Badge>
						<Badge colorScheme='green'>
							End Date {` : ${eDate}`}
						</Badge>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<DateRangePickerComp />
					</ModalBody>
					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
