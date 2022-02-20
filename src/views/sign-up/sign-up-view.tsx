import React, { ReactElement } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Menu from '../shared/components/menu';
import { H1 } from '../layout/layout.styles';
import { getLocaleDateString } from '../shared/utils/locale-datetime';

import { HookData } from './use-sign-up';
import {
  Wrapper,
  Form,
  Input,
  InputFile,
  Button,
  Droparea,
  ClearButton,
  Preview,
  Img,
  Label,
  Select,
} from './sign-up.styles';

const SignUpView: React.FC<HookData> = ({
  data,
  movies,
  sitRows,
  sitPlaces,
  handleChangeData,
  handleChangeAvatar,
  handleSubmit,
  handleClearAvatar,
  handleChangeMovieId,
  handleChangeSitRow,
  handleChangeSitPlace,
}): ReactElement => {
  return (
    <Wrapper>
      <Menu />

      <Form onSubmit={handleSubmit}>
        <Row center="xs">
          <Col xs={12} md={4}>
            <H1>Sign up for a movie</H1>

            <Input
              type="text"
              name="first-name"
              placeholder="Enter your first name"
              value={data.firstName}
              onChange={(e) => handleChangeData('firstName', e.target.value)}
            />

            <Input
              type="text"
              name="last-name"
              placeholder="Enter your last name"
              value={data.lastName}
              onChange={(e) => handleChangeData('lastName', e.target.value)}
            />

            <Input
              type="number"
              name="phone"
              placeholder="Enter your phone"
              value={data.phone}
              onChange={(e) => handleChangeData('phone', e.target.value)}
            />

            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={(e) => handleChangeData('email', e.target.value)}
            />

            {movies.length > 0 && (
              <Select onChange={(e) => handleChangeMovieId(e.target.value)}>
                <option>
                  Select movie
                </option>
                {movies.map((movie) => (
                  <option key={movie.id} value={movie.id}>
                    {movie.title}{' '}
                    ({getLocaleDateString(movie.startDate)})
                    (duration: {movie.duration / 60000} mins)
                  </option>
                ))}
              </Select>
            )}

            <Select onChange={(e) => handleChangeSitRow(e.target.value)}>
              <option>
                Select sit row
              </option>
              {sitRows.map((sitRow) => (
                <option key={`sit-row-${sitRow}`} value={sitRow}>
                  {sitRow}
                </option>
              ))}
            </Select>

            <Select onChange={(e) => handleChangeSitPlace(e.target.value)}>
              <option>
                Select sit place
              </option>
              {sitPlaces.map((sitPlace) => (
                <option key={`sit-row-${sitPlace}`} value={sitPlace}>
                  {sitPlace}
                </option>
              ))}
            </Select>

            <Label>Upload your avatar</Label>

            {data.avatarBase64.length > 0 ? (
              <Preview>
                <Img
                  src={data.avatarBase64}
                  alt={`${data.firstName} ${data.lastName}`}
                />
                <ClearButton onClick={handleClearAvatar}>Remove</ClearButton>
              </Preview>
            ) : (
              <Droparea>
                <InputFile
                  type="file"
                  name="avatar"
                  onChange={handleChangeAvatar}
                />

                <span>Click or drop your files here</span>
              </Droparea>
            )}

            <Button type="submit">Save</Button>
          </Col>
        </Row>
      </Form>
    </Wrapper>
  );
};

export default SignUpView
