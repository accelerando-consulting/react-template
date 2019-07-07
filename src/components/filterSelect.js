// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import React, { Component } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


const styles = theme => (
  {
    formControl: {
      margin: 0,
      minWidth: 80,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  }
);

type Props = {
  name: string,
  value: string,
  values: [],
  labels: {},
  selected: {},
  selectItem: (string) => void,
};

class FilterSelect extends Component<Props> {
  props: Props;

  render() {
    console.log("filterSelect component render props=", this.props);
    const {
      classes,
      name,
      value='',
      values=[],
      labels={},
      selected={},
      selectItem,
    } = this.props;
    console.log("values=", values);

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={`${name}-input`}>
          {name}
        </InputLabel>
        <Select
          value={value}
          onChange={selectItem}
          className={classes.selectEmpty}
          input={
            <Input name={name} id={`${name}-input`} />
          }
        >
          <MenuItem value="[any]">[any]</MenuItem>
          {values.map(v=>(<MenuItem value={v} >{labels[v]||v}</MenuItem>))}
        </Select>
      </FormControl>
    );}
}

export default withStyles(styles)(withTheme()(FilterSelect))
