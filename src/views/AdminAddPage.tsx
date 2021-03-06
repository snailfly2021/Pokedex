import React, { useState,useRef} from 'react';
import styled from "styled-components";
import NavBar from "../components/Common/NavBar";
import LogoutHeader from "../components/Common/LogoutHeader";
import { useForm } from "react-hook-form";
import EditPokemon from "../components/EditPokemon";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHistory } from "react-router";
import axios from 'axios';
import server from '../config/server';

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(53, 57, 30, 0.4)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  switchContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    color: "#616161",
    margin: "10px",
    width: "100px",
    size: "small",
  },
  copyright: {
    marginBottom: 0,
  },
  admin: {},
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    marginLeft: theme.spacing(2),
    alignItems: "center",
  },
}));

const Background = styled.div`
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
  no-repeat center center fixed rgba(161, 189, 198, 0.75);
  min-height: 100vh;
  background-size: cover;
  background-blend-mode: multiply;
`;

const Wrapper = styled.div`
width: 850px;
      margin: 0 auto;
      background: inherit;
      text-align: left;
      .loadMore{
        margin: 50px auto;
      }
      @media(max-width: 875px){
        width: 418px;
      }
      @media(max-width: 576px){
        width: 230px;
      }
`;

const FormEntry = styled.div`
justify-item:left;
display:flex;
flex-direction:column;
text-align:left;
`;

const AdminAddPage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => alert(JSON.stringify(data));
    const classes = useStyles();
    const [flag, setFlag] = React.useState(1);
    const [id, setId] = React.useState('');
    const [name, setName] = React.useState('');
    const [type, setType] = React.useState('');
    const [specy, setSpecy] = React.useState('');
    const [ability, setAbility] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [baseHp, setBaseHp] = React.useState('');
    const [minHp, setMinHp] = React.useState('');
    const [maxHp, setMaxHp] = React.useState('');
    const [baseAttack, setBaseAttack] = React.useState('');
    const [minAttack, setMinAttack] = React.useState('');
    const [maxAttack, setMaxAttack] = React.useState('');
    const [baseSpAttack, setBaseSpAttack] = React.useState('');
    const [minSpAttack, setMinSpAttack] = React.useState('');
    const [maxSpAttack, setMaxSpAttack] = React.useState('');
    const [baseDefence, setBaseDefence] = React.useState('');
    const [minDefence, setMinDefence] = React.useState('');
    const [maxDefence, setMaxDefence] = React.useState('');
    const [baseSpDefence, setBaseSpDefence] = React.useState('');
    const [minSpDefence, setMinSpDefence] = React.useState('');
    const [maxSpDefence, setMaxSpDefence] = React.useState('');
    const [baseSpeed, setBaseSpeed] = React.useState('');
    const [minSpeed, setMinSpeed] = React.useState('');
    const [maxSpeed, setMaxSpeed] = React.useState('');


    const handleChangeFlag = (event: any) => {
      const temp = event.currentTarget.id;
    if (temp === "Add") {
      setFlag(1);
    } else {
      setFlag(2);
    }
    };

    const handleChangeName = (event: any) => {
      const temp =  event.target.value;
      setName(temp);
    }

    const handleChangeId = (event: any) => {
      const temp =  event.target.value;
      setId(temp);
    }

    const handleChangeType = (event: any) => {
      const temp =  event.target.value;
      setType(temp);
    }

    const handleChangeSpecy = (event: any) => {
      const temp =  event.target.value;
      setSpecy(temp);
    }

    const handleChangeAbility = (event: any) => {
      const temp =  event.target.value;
      setAbility(temp);
    }

    const handleChangeHeight = (event: any) => {
      const temp =  event.target.value;
      setHeight(temp);
    }

    const handleChangeWeight = (event: any) => {
      const temp =  event.target.value;
      setWeight(temp);
    }

    const handleChangeBaseHp = (event: any) => {
      const temp =  event.target.value;
      setBaseHp(temp);
    }

    const handleChangeMinHp = (event: any) => {
      const temp =  event.target.value;
      setMinHp(temp);
    }

    const handleChangeMaxHp = (event: any) => {
      const temp =  event.target.value;
      setMaxHp(temp);
    }

    const handleChangeBaseAttack = (event: any) => {
      const temp =  event.target.value;
      setBaseAttack(temp);
    }

    const handleChangeMinAttack = (event: any) => {
      const temp =  event.target.value;
      setMinAttack(temp);
    }

    const handleChangeMaxAttack = (event: any) => {
      const temp =  event.target.value;
      setMaxAttack(temp);
    }

    const handleChangeBaseSpAttack = (event: any) => {
      const temp =  event.target.value;
      setBaseSpAttack(temp);
    }

    const handleChangeMinSpAttack = (event: any) => {
      const temp =  event.target.value;
      setMinSpAttack(temp);
    }

    const handleChangeMaxSpAttack = (event: any) => {
      const temp =  event.target.value;
      setMaxSpAttack(temp);
    }

    const handleChangeBaseDefence = (event: any) => {
      const temp =  event.target.value;
      setBaseDefence(temp);
    }

    const handleChangeMinDefence = (event: any) => {
      const temp =  event.target.value;
      setMinDefence(temp);
    }

    const handleChangeMaxDefence = (event: any) => {
      const temp =  event.target.value;
      setMaxDefence(temp);
    }

    const handleChangeBaseSpDefence = (event: any) => {
      const temp =  event.target.value;
      setBaseSpDefence(temp);
    }

    const handleChangeMinSpDefence = (event: any) => {
      const temp =  event.target.value;
      setMinSpDefence(temp);
    }

    const handleChangeMaxSpDefence = (event: any) => {
      const temp =  event.target.value;
      setMaxSpDefence(temp);
    }

    const handleChangeBaseSpeed = (event: any) => {
      const temp =  event.target.value;
      setBaseSpeed(temp);
    }

    const handleChangeMinSpeed = (event: any) => {
      const temp =  event.target.value;
      setMinSpeed(temp);
    }

    const handleChangeMaxSpeed = (event: any) => {
      const temp =  event.target.value;
      setMaxSpeed(temp);
    }

    const handleAddPokemon = () => {
      axios({
        method: 'post',
        url: server + '/pokemons',
        data: {
          name: name,
          type: type,
          species: specy,
          abilities: ability,
          height: height,
          weight: weight,
          baseHp: baseHp,
          minHp: minHp,
          maxHp: maxHp,
          baseAttack: baseAttack,
          minAttack: minAttack,
          maxAttack: maxAttack,
          baseSpAtk: baseSpAttack,
          minSpAtk: minSpAttack,
          maxSpAtk: maxSpAttack,
          baseSpDef: baseSpDefence,
          minSpDef: minSpDefence,
          maxSpDef: maxSpDefence,
          baseDefence: baseDefence,
          minDefence: minDefence,
          maxDefence: maxDefence,
          baseSpeed: baseSpeed,
          minSpeed: minSpeed,
          maxSpeed: maxSpeed
        }
      })
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
        }
      })
      .catch((error) => {
        console.log(error)
      })
    }

    const handleDeletePokemon = () => {
      axios({
        method: 'delete',
        url: server + '/pokemons',
        data: {
          id: id,
          name: name,
        }
      })
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
        }
      })
      .catch((error) => {
        console.log(error)
      })
    }

        return(
            <Background>
            <LogoutHeader /> 
            <NavBar/>
            <EditPokemon/>
            <Wrapper>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.switchContainer}>
                  <div>
                    <Button id="Add" size = "small" variant="outlined" color="primary" className={classes.button} onClick={handleChangeFlag}>
                      Add
                    </Button>
                    <Button id="Delete" size = "small" variant="outlined" color="primary" className={classes.button} onClick={handleChangeFlag}>
                      Delete
                    </Button>
                  </div>
                </div>
                <form className={classes.form} noValidate hidden={flag !== 1}>
                    <FormEntry>
                    <label>Pokemon Name:</label>
                    <input type="text" value={name} onChange={handleChangeName} style={{width:"29em",margin:"10px auto" }} />
                    </FormEntry>
                    <FormEntry>
                    <label>Pokemon Type:</label>
                    <input type="twxt" value={type} onChange={handleChangeType} style={{width:"29em",margin:"10px auto" }} />
                    </FormEntry>
                    <FormEntry>
                    <label>Species:</label>
                    <input type="text" value={specy} onChange={handleChangeSpecy} style={{width:"29em",margin:"10px auto" }} />
                    </FormEntry>
                    <FormEntry>
                    <label>Abilities:</label>
                    <input type="text" value={ability} onChange={handleChangeAbility} style={{width:"29em",margin:"10px auto" }} />
                    </FormEntry>
                    <FormEntry>
                    <label>Height:</label>
                    <input type="text" value={height} onChange={handleChangeHeight} style={{width:"29em",margin:"10px auto" }} />
                    </FormEntry>
                    <FormEntry>
                    <label>Weight:</label>
                    <input type="text" value={weight} onChange={handleChangeWeight} style={{width:"29em",margin:"10px auto" }} />
                    </FormEntry>
                    <FormEntry>
                    <label>Stat: Base/Min/Max</label>
                    <div>
                    <label> Hp: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" value={baseHp} onChange={handleChangeBaseHp} style={{width:"2em",margin:"10px auto" }} />
                    <b>&nbsp;</b>
                    <input type="text" value={minHp} onChange={handleChangeMinHp} style={{width:"2em",margin:"10px auto" }} />
                    <b>&nbsp;</b>
                    <input type="text" value={maxHp} onChange={handleChangeMaxHp} style={{width:"2em",margin:"10px auto" }} />
                    <label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attack: &nbsp;&nbsp;</label>
                    <input type="text" value={baseAttack} onChange={handleChangeBaseAttack} style={{width:"2em",margin:"10px auto" }} />
                    <b>&nbsp;</b>
                    <input type="text" value={minAttack} onChange={handleChangeMinAttack} style={{width:"2em",margin:"10px auto" }} />
                    <b>&nbsp;</b>
                    <input type="text" value={maxAttack} onChange={handleChangeMaxAttack} style={{width:"2em",margin:"10px auto" }} />
                    </div>
                    <div>
                    <label> Sp Atk: &nbsp;&nbsp;</label>
                    <input type="text" value={baseSpAttack} onChange={handleChangeBaseSpAttack} style={{width:"2em",margin:"10px auto" }} />
                    <b>&nbsp;</b>
                    <input type="text" value={minSpAttack} onChange={handleChangeMinSpAttack} style={{width:"2em",margin:"10px auto" }} />
                    <b>&nbsp;</b>
                    <input type="text" value={maxSpAttack} onChange={handleChangeMaxSpAttack} style={{width:"2em",margin:"10px auto" }} />
                    <label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sp Def:&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" value={baseSpDefence} onChange={handleChangeBaseSpDefence} style={{width:"2em",margin:"10px auto" }} />
                    <b>&nbsp;</b>
                    <input type="text" value={minSpDefence} onChange={handleChangeMinSpDefence} style={{width:"2em",margin:"10px auto" }} />
                    <b>&nbsp;</b>
                    <input type="text" value={maxSpDefence} onChange={handleChangeMaxSpDefence} style={{width:"2em",margin:"10px auto" }} />
                    </div>
                    <div>
                    <label> Defense: </label>
                    <input type="text" value={baseDefence} onChange={handleChangeBaseDefence} style={{width:"2em",margin:"10px auto" }} />
                    <b>&nbsp;</b>
                    <input type="text" value={minDefence} onChange={handleChangeMinDefence} style={{width:"2em",margin:"10px auto" }} />
                    <b>&nbsp;</b>
                    <input type="text" value={maxDefence} onChange={handleChangeMaxDefence} style={{width:"2em",margin:"10px auto" }} />
                    <label> &nbsp;&nbsp;&nbsp;&nbsp;Speed: &nbsp;&nbsp;&nbsp;</label>
                    <input type="text" value={baseSpeed} onChange={handleChangeBaseSpeed} style={{width:"2em",margin:"10px auto" }} />
                    <b>&nbsp;</b>
                    <input type="text" value={minSpeed} onChange={handleChangeMinSpeed} style={{width:"2em",margin:"10px auto" }} />
                    <b>&nbsp;</b>
                    <input type="text" value={maxSpeed} onChange={handleChangeMaxSpeed} style={{width:"2em",margin:"10px auto" }} />
                    </div>
                    </FormEntry>
                    <p>&nbsp;</p>
                <Button onClick={handleAddPokemon} variant="contained" color="primary" size = "small" style={{width:"100px",margin:"10px auto" }}>
                Add
                </Button>
                </form>
              <form className={classes.form} noValidate hidden={flag !== 2}>
              <FormEntry>
                    <label>Pokemon ID:</label>
                    <input type="text" value={id} onChange={handleChangeId} placeholder="001" style={{width:"29em",margin:"10px auto" }}  />
                    </FormEntry>
                    <FormEntry>
                    <label>Pokemon name:</label>
                    <label>(Just confim whether it is the correct one):</label>
                    <input type="text" value={name} onChange={handleChangeName} style={{width:"29em",margin:"10px auto" }} />
                    <p>&nbsp;</p>
                    </FormEntry>
                <Button onClick={handleDeletePokemon} variant="contained" color="secondary" size = "small" style={{width:"100px",margin:"10px auto" }}>
                Delete
                </Button>
                
              </form>
            </Container>
            </Wrapper>
            </Background>
        )

}

export default AdminAddPage;