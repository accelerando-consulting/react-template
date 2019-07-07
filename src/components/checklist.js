// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import React, { Component } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const styles = theme => (
  {
    task_cell: {
      minWidth: '30vw'
    },
  }
);

type Props = {
  index: number,
  name: string,
  expanded: boolean,
  items: [],
  toggle: () => void,
  toggleItem: (number) => void,
};

class Checklist extends Component<Props> {
  props: Props;

  render() {
    console.log("checklist component render props=", this.props);
    const {
      classes,
      index=1,
      name,
      expanded=false,
      items,
      toggle,
      toggleItem,
    } = this.props;
    let itemCount = items.length
    let checkedItemCount = items.filter(i=>i.checked).length

    return (
      <Card raised={true}>
        <CardHeader title={`${index}: ${name}`} subtitle={`${checkedItemCount} of ${itemCount} completed`} />
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="dense">Step</TableCell>
                <TableCell padding="dense">Task</TableCell>
                <TableCell padding="dense">Pass</TableCell>
                <TableCell padding="dense">FAIL</TableCell>
                <TableCell padding="dense">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                items.map((i,n) => (
                  <TableRow>
                    <TableCell padding="dense">{n+1}</TableCell>
                    <TableCell padding="dense" className={classes.task_cell}>{i.name}</TableCell>
                    <TableCell padding="dense"><Checkbox checked={i.pass} /></TableCell>
                    <TableCell padding="dense"><Checkbox checked={i.fail} /></TableCell>
                    <TableCell padding="dense">{i.action}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );}
}

export default withStyles(styles)(withTheme()(Checklist))
