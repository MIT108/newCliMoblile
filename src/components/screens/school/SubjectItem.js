/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const SubjectItem = () => (
  <Card style={{ marginBottom: 20 }}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Start</Button>
    </Card.Actions>
  </Card>
);

export default SubjectItem;