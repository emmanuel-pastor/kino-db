import React, {useContext} from 'react';
import InputBase from '@material-ui/core/InputBase';
import {createStyles, fade, makeStyles, Theme} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {colors} from "@material-ui/core";
import {MovieContext} from "../../../MovieContext";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'relative',
            alignSelf: 'center',
            textAlign: 'start',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.black, 0.025),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.07),
            },
            marginLeft: 0,
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            color: colors.grey["600"],
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit'
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }),
);

export default function Searchbar() {
    const classes = useStyles();
    const {search, setSearch, fetchMultiSearch} = useContext(MovieContext);
    const history = useHistory();

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
                spellCheck={false}
                onChange={(e) => setSearch(e.target.value)}
                onBlur={(e) => e.target.value = ''}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        history.push(`/search/${search}`);
                        fetchMultiSearch(search);
                    }
                }}
            />
        </div>
    );
}