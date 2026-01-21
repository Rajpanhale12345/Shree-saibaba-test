import './About.css';
import Upper from './Upper';
import mission from './Images/mission.jpg';
import vision from './Images/Vision.jpg';
import founder1 from './Images/dr.pallavi.webp';
import founder2 from './Images/dr.aniruddha.webp';
import { Helmet } from 'react-helmet-async';
import quality from './Images/qualitypolicy.webp';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import hospital from './Images/hospital.webp';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
        ...theme.applyStyles('dark', {
          color: 'inherit',
        }),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

function About() {
  // Separate state for each doctor's menu
  const [anchorElAnir, setAnchorElAnir] = React.useState(null);
  const [anchorElPallavi, setAnchorElPallavi] = React.useState(null);

  const openAnir = Boolean(anchorElAnir);
  const openPallavi = Boolean(anchorElPallavi);

  const handleClickAnir = (event) => {
    setAnchorElAnir(event.currentTarget);
  };
  const handleCloseAnir = () => {
    setAnchorElAnir(null);
  };

  const handleClickPallavi = (event) => {
    setAnchorElPallavi(event.currentTarget);
  };
  const handleClosePallavi = () => {
    setAnchorElPallavi(null);
  };

  // Background block for the three info paragraphs
  const infoWrapperStyle = {
    maxWidth: '1180px',
    margin: '0 auto 2.5rem',
    padding: '22px 18px',
    borderRadius: '18px',
    backgroundImage: `
      linear-gradient(
        135deg,
        rgba(31, 83, 174, 0.85),
        rgba(84, 7, 7, 0.7)
      ),
      url(${hospital})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 18px 40px rgba(15, 23, 42, 0.35)',
    overflow: 'hidden',
  };

  const infoInnerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '10px 6px',
    backdropFilter: 'blur(2px)',
  };

  const infoParagraphStyle = {
    textAlign: 'justify',
    fontSize: 'clamp(14px, 1.02rem, 16px)',
    lineHeight: 1.9,
    color: '#f9fafb',
    marginBottom: '1.2rem',
  };

  return (
    <>
      <Helmet>
        <title>About | Shree Saibaba Multispeciality Hospital</title>

        <meta
          name="description"
          content="Shree Saibaba Heart Institute & Multispeciality Hospital in Nashik delivers advanced cardiac, orthopaedic, robotic joint care, diagnostics, and 24x7 emergency services."
        />
        <meta
          name="keywords"
          content="shree saibaba hospital nashik, saibaba heart institute, multispeciality hospital nashik, cardiac hospital nashik, cardiology services nashik, orthopaedic care nashik, robotic joint replacement nashik, emergency hospital nashik, best heart hospital nashik, healthcare services nashik"
        />
        <meta
          property="og:description"
          content="A leading centre for advanced cardiac care, orthopaedics, robotic joint replacement, diagnostics, and 24x7 emergency services in Nashik."
        />

        <meta
          property="og:title"
          content="About | Shree Saibaba Heart Institute & Multispeciality Hospital, Nashik"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://shreesaibabamultispecialityhospital.com/about"
        />
        <meta
          property="og:image"
          content="https://shreesaibabamultispecialityhospital.com/assets/mission-CCSDa_Bs.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About | Shree Saibaba Multispeciality Hospital"
        />
        <meta
          name="twitter:description"
          content="A trusted hospital in Nashik offering excellence in cardiology, orthopaedics, robotic surgery, diagnostics, and 24x7 emergency care."
        />
        <meta
          name="twitter:image"
          content="https://shreesaibabamultispecialityhospital.com/assets/mission-CCSDa_Bs.jpg"
        />

        <link
          rel="canonical"
          href="https://shreesaibabamultispecialityhospital.com/about"
        />
      </Helmet>

   
<br /><br /><br /><br /><br />
      <div className="main1">
        <ul>
          <div className="title">
            <h2
              className="medical"
              style={{ color: 'blue', fontSize: '35px', fontWeight: '500' }}
            >
              Visionary Leaders
            </h2>
            <br />
            <br />
            <div className="founders">
              {/* ---------- Dr Aniruddha ---------- */}
              <div className="founder1">
                <img src={founder2} alt="founder2" />
                <br />
                <p>Dr. Aniruddha Dharmadhikari </p>
                <span style={{ color: 'blue', fontSize: '20px' }}>
                  M.D., M.B.B.S. (Internal Medicine), D.M. (Cardiology)
                </span>
                <br />
                <br />

                <Button
                className='readmore'
                  id="readmore-anir"
                  aria-controls={openAnir ? 'menu-anir' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openAnir ? 'true' : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClickAnir}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Read More...
                </Button>

                <StyledMenu
                  id="menu-anir"
                  slotProps={{
                    list: {
                      'aria-labelledby': 'readmore-anir',
                    },
                  }}
                  anchorEl={anchorElAnir}
                  open={openAnir}
                  onClose={handleCloseAnir}
                >
                  <MenuItem className='para' onClick={handleCloseAnir} disableRipple>
                    Dr. Aniruddha Dharmadhikari is a cardiologist<br /> who has
                    performed 
                    thousands of <br />successful cardiac procedures and <br /> has shaped a
                    hospital 
                    into one of<br /> the leading hospitals for heart <br /> treatment and
                    advanced 
                    cardiac care in <br />Nashik. He is a highly respected physician<br />
                    who practices 
                    interventional cardiology <br />and evidence-based medicine. His
                   <br /> dedication 
                    to patient care has made the<br /> hospital the preferred choice
                    for cardiac<br /> treatment,
                    angiograms, and other advanced <br /> cardiac services in Nashik
                    and beyond.
                  </MenuItem>
                </StyledMenu>
              </div>

              {/* ---------- Dr Pallavi ---------- */}
              <div className="founder">
                <img src={founder1} alt="founder1" />
                <br />
                <p>Dr. Pallavi Dharmadhikari</p>
                <span style={{ color: 'blue', fontSize: '20px' }}>
                  M.D., M.B.B.S. And D.N.B. (Radiodiagnosis)
                </span>
                <br />
                <br />

                <Button
                  id="readmore-pallavi"
                  aria-controls={openPallavi ? 'menu-pallavi' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openPallavi ? 'true' : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClickPallavi}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Read More...
                </Button>

                <StyledMenu
                  id="menu-pallavi"
                  slotProps={{
                    list: {
                      'aria-labelledby': 'readmore-pallavi',
                    },
                  }}
                  anchorEl={anchorElPallavi}
                  open={openPallavi}
                  onClose={handleClosePallavi}
                >
                  <MenuItem className='para' onClick={handleClosePallavi} disableRipple>
                    Dr. Pallavi Dharmadhikari has created <br /> one of the most
                    reputable 
                    radiology<br /> departments  in the region by ensuring that <br />
                    patients receive
                    timely and accurate <br /> diagnoses through high-quality imaging
                    <br /> equipment 
                    and interpretation.<br /> As a trusted physician, Dr. Pallavi <br /> is
                    committed 
                    to providing  the best possible <br />    care to her patients.
                  </MenuItem>
                </StyledMenu>
              </div>
            </div>
            <br />
            <br />

            {/* ---------- Three paragraphs with background image ---------- */}
            <div style={infoWrapperStyle}>
              <div style={infoInnerStyle}>
                <p style={infoParagraphStyle}>
                  <h1 style={{color : "white"}}>About us</h1> <br />
                  The Saibaba Heart Institute &amp; Multispeciality Hospital
                  leads the industry in high-end cardiac services as well as a
                  well-established, reputable centre with total Orthopaedic
                  care. The Institute has built an impressive reputation in many
                  areas of healthcare delivery by providing patient-focused and
                  ethical healthcare that is affordable, with the specific
                  vision to be a Centre of Excellence in the healthcare
                  Community, providing state-of-the-art infrastructure and
                  technology to medical professionals, along with a
                  compassionate and healing environment for patients. Our
                  mission includes a commitment to both excellence and
                  accountability for all health care services.
                </p>

                <p style={infoParagraphStyle}>
                  Saibaba Heart Institute &amp; Multispeciality Hospital
                  combines cutting-edge medical technology with personal
                  devotion to provide local patients with an easy-to-access,
                  comprehensive facility where they can receive consistently
                  superior and exceptional care. In addition to being nationally
                  recognised leaders in cardiology and heart disease care, we
                  provide comprehensive Orthopaedic services for all external
                  injuries, as well as comprehensive care and repair of the
                  spine, robotic arthroscopy, complex osteosynthesis, and many
                  other procedures for increased speed of recovery,
                  precision-guided-motion results, and enhanced long-term
                  mobility.
                </p>

                <p style={{ ...infoParagraphStyle, marginBottom: 0 }}>
                  The Saibaba Heart Institute and Multispeciality Hospital
                  offers a complete and total Healthcare Package. This means
                  that all of our services are included and delivered in one
                  location; cardiac, orthopaedic, robotic joint replacement,
                  highly accurate diagnostic imaging service, and 24x7 emergency
                  services are all available at one location, ensuring the best
                  possible outcomes for each patient. Our staff embraces an
                  environment of Integrity and Innovation while serving the best
                  health interests of each patient in their community.
                </p>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />

          <hr />
        </ul>
      </div>
      <br />
      <br />
      <div className="misvis">
        <p>
          <span style={{ color: 'blue', fontSize: '40px' }}>
            {' '}
            <i style={{ color: 'blue' }}>Vision </i>{' '}
          </span>{' '}
          <br />
          To be a Center of excellence in healthcare delivering ethical and
          advanced medical services to improve community.
        </p>
        <img src={vision} alt="vision" />
      </div>
      <br />
      <br />
      <div className="misvis2">
        <img src={mission} alt="" />
        <p>
          <span style={{ color: 'blue', fontSize: '40px' }}>
            {' '}
            <i style={{ color: 'blue' }}> Mission </i>
          </span>{' '}
          <br />
          Our Mission is to provide patient-centric affordable, and high quality
          health care.{' '}
        </p>
      </div>
      
    
      <hr />
      <br />
      <br />
      <div className="service">
        <p>
          <i style={{ color: 'blue', fontSize: '30px', fontWeight: '500' }}>
            Services and Working Time
          </i>
        </p>
        <br />
        <br />
        <div className="service-sec">
          <div className="service-section">
            <span>
              <gen style={{ color: 'red' }}>General OPD</gen> <br />
              <nm style={{ color: 'white' }}>
                24 x 7
                <br />
                <a href="tel:7041704114">Call on: 7041 7041 14</a>
              </nm>{' '}
              <br />
              <br />
            </span>
            <br />
          </div>
          <div className="service-section1">
            <span>
              <gen style={{ color: 'red' }}>Ambulance</gen>
              <br />
              <nm style={{ color: 'white' }}>
                24 x 7
                <br />
                <a href="tel:7041704114">Call on: 7041 7041 14</a>
              </nm>{' '}
              <br />
              <br />
            </span>{' '}
            <br />
          </div>
          <div className="service-section2">
            <span>
              <gen style={{ color: 'red' }}>Emergency Care</gen>
              <br />
              <nm style={{ color: 'white' }}>
                24 x 7
                <br />
                <a href="tel:7041704114">Call on: 7041 7041 14</a>
              </nm>{' '}
              <br />
            </span>{' '}
            <br />
          </div>
          <div className="service-section3">
            <span>
              <gen style={{ color: 'red' }}>Consultation No.</gen> <br />
              <nm style={{ color: 'white' }}>
                24 x 7
                <br />
                <a href="tel:7041704114">Call on: 7041 7041 14</a>
              </nm>
              <br />
              <br />
            </span>{' '}
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default About;
