/**
 * Created by OunknownO on 30.01.2017..
 */

    import React from 'react';
    import { Input, Col } from 'reactstrap';

        const SearchBar = (props) => (
            <Col xs="12" sm="12" md="6" lg="4">

                <Input
                       name={props.name}
                       type="text"
                       defaultValue={props.value}
                       placeholder={props.placeholder}
                />

            </Col>
        );
        export default SearchBar;