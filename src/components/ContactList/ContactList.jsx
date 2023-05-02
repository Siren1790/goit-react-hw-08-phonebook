import { selectFilteredContacts } from 'redux/contact/selector';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contact/operations';
import {
  ListOfContact,
  Container,
  ContactItem,
  Button,
  Paragraph,
} from './ContactList.module';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <Container>
      <ListOfContact>
        {contacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
            <Paragraph>Name: {name}</Paragraph>
            <Paragraph>Tel: {number}</Paragraph>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ContactItem>
        ))}
      </ListOfContact>
    </Container>
  );
};
