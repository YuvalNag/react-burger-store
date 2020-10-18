import React, { useState } from 'react'

// import classes from './ProductCard.module.css'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, makeStyles, CardActions, Divider, Theme, createStyles, useTheme, IconButton, Collapse } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            margin: '1rem',
            width: 355
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            backgroundSize: 'auto',
            width: '100%',
            padding: '1rem'
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            padding: '1rem'
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    }),
);


const ProductCard = ({ title, description, price, imageSrc }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [hover, setHover] = useState(false)
    theme.direction = 'rtl'
    return (
        <div>
            <image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8AAAAaGhgXFxUWFhTy8vLb29v7+/sNDQqoqKj19fXl5eXT09P8/PwSEhBbW1pEREPt7e2cnJza2tro6OgGBgDCwsLKysqPj4+ysrIhIR8/Pz50dHPQ0NBJSUhSUlF9fXxpaWguLiw4ODerq6uFhYVsbGu5ubmLi4uWlpYoKCZhYWAzMzFOTk0fHxzXxH5UAAAXeUlEQVR4nO1cZ9uiMLNmBKRpFKSIFbFj+f8/78wklFB8yu6e93rPuXJ/2PVBCJnJZHrUNAUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWFTzDD+uO2/D8LtetJm4ZW/27vYfYvBvdv3uF5vUtu/67tI6k/O1fxf8wvWdlzwv9Mxr2nkoEJtWAxyKpRQQy7hVgb7bWg/kLCGbKxwKKedQDg+GEJf4AtY5gTQZaLmIpL3moTT2rweVtPgGq6CUBKj/hgp/ieO0Q7unwCe9obe/MNhVcYQcm6uf1MaNhN5G/B0XY2m89e8woBv2fNIijBjiWNRzay36MSq1Xce8fLtnMc4Zk/n3meWYKEehzCmV8aGaw48Ccetg7Fzkfm6QC+tWYjVmy16duwj7MafEZI/L66cBtcziWMRlDQXC3QGaxMzUWuXMB1n8aI2awGcBk+GhUpIx32fIRwpOMfNeDWfYWPrzBwBIPAxFMTGEnQwSJRwA+GkCMbh6SPe4azC1x6A3LBwzuYXQN8vhzNJdh1V7iicAQZp3DEx5kgLc+D5q8MeRIjSOn2vS3Ny+CL6NH7pftO3Vek0B6IaAg716xyJuVrGA2Jm8XQOYW6oHDRZsuKluwsX4Nt990aiTZ+E9UU2g+8hLLr9Sjk93BGNwMu6JLZvlFMUUYWtQe6EFv6FJ6gpl/bAI4JngYkYRMUKTaCZechIycKr60JBQMULgDfD1wZHnF9ombfzpptEtH7uPSZRXXN5u/WOBvxjhLGAIUPopAx/r2Nov9CWTJte2RXo6NAWrSs9BG4XFjO0WC4RsmG2YB3BztG2uIJrNoMOCJfQ7eQpAq5MAAvg5Jxk0InyajgpqegRHZklfD51bUHlGuIDwa3TYk13MPuG04j3ODzPf/+sgLB+3AGh4XQyhmsuXSNnVMGUD5+Az4pD2a023Cp1sgX7/ys5AWMVcB11iKv16FcqT6WUNI1i+AxfMu9rz80nE3fOmUD13B1do0N2QCn0Klp0TSJ9ftKBDJhBbJS0R+go6KnMOu+5hJ9onBcUriAwhm+AwWx/81iiMJNaVPbr5b3hyconNl2fQmy+mMCa/HhwQey+NLR5UNnTB/m3ddY0Ndy9VT5/Oebj+7BeYA7Juh9V2UzwArUFz0Kp7uGwoUsOc+SRS+uF1PxJDoD3VeNIe+5Reu+DhCYANcvWV8QaxwG9rBZv0OyQhtuvNvwOxTafpvCBIqGtQFw78Va802+tkNx8Sm+vdYkhGD3+DuHpHtJIAX2wo3xBYEoM33fKBRz0cxHpXE0ovDYuxEplPjjQdSjUBL3sRA1M6fZLuDCBxiVfFs3o+N9PeM3h56WE0jBOGrO5QNxHK/ePqClF69FIZ/UFzcR9J8Ge9/8MUihJNqRQcP5K5LWjaDiLPQqPsrqzTeGvvErngP+PCEFvdjsPtAmcIz636elesN3NcKBFPb5eBEOloCQUqtFofAmqptZjndFuO7u6CmeGInnx20KpYc4TPi0SuhVMePD+gpYOlv3Lu5K2VqApMmRwr7nPWPSRY+bCTNnUWVBEmAl/zzPCw82mWcPzeZmFj3vTpzMmfHWuhQio7rm4j7o0og3DLs7EoWM6eJTfFsKnOe2nS1vuPM9XbIQSGFbn03jOGiNjxR6RKEBlXpJQB9xamdg2wxNun1AYka6zdAlpyCm9BiJwprRJjAuk141oeUF7MfyNuSZkp8/ZKdbFBpMfHrWnhx6/RFfvVB2JZDCtsZCaYKWO95QWG0apJARhVvg7pih63bb3RyV+3QMdq0OTDAMEt0MJDcS/cBBgzcBo/g6UMbACipmtJ1fjVPYKAqksG11HWh89BaFjFVXklL4LtxDZ8+CgduiUC/3NlJY7zSk8E37+cnkCdl9hSimPbDLWkD3XAj9rRMS0OJ5RstaQDvIf5BjLHtYE7EPV5A1TOBC7FFQiASaYwPEetYE3qtpNNKOJujCudOe0KCQEoVfa1K0uG9hXqGDkD9ez1Vz9a6i4bflknFO+CxTeFnNLVywz2LIlCRP83Ld0Ku3VNY0hcYcbLkoEEdlPIfnP+mrpQ78RIzsB04LQsNIania9B25Dky+IcbSxvcEraHH0Q7TLU/KYoVpY++2GY0wbc/H+eDTfE/h/3UoCn8Hc0BSLG8xmXjfJTb/97D4HYXSDlqkztXvfJ1B0LpkxdlxJCxofkm7d/9nMP4dhbU52Arz3wkIH5F8ZULKrtifl8HyNqN8w34gQm7BOwVO48lr44EM868hu3vfw6ycliX6vhN3/Oz4QzE0Xs3igSSdmu+96wHg2HdcJQQAhnSP+fwXsv1bChk3D2fY8alPuou4rC5YN7TKXXfQx4uHz27+AuaeuTjXXDrDv5Dr31Go2dwCOzAX8mPlndRBXIaL/hHmC60P/wLRsOuhUdKUP+LtythXJHX+FoMUxpuiPbh7XW5uJDwjG2lz6/SZ2Q0IU5FTQRfrU0kq/pgyQo9b/G+9uOtz+5JC/0PA2wNqmq7XNskhYivpQngRbtF6TIl9X7uv6tG7XozDKZzAQKBYP5J/ItGrUgTTF8nnyj66GIDdDsu+Fr5evnpFC2Po5plcHf1l3W7Y579hHSy8cWDAOAak7oOLS9gQhS6TUht9mMde8qxEfdmy7ygp0UMbHwVzD50n1qAbn1JPHVx7UVW4o5hEyq44sBH+YniMzHiipa/Pw6355NOvCEQSnW+twNZGRkK8ABZ4vufMeX5HQgo2ROuhalMP8Xrb+VsEuKIkxeHUK2IWRPdRtmrLdswbtRnrC0U0LZM6D/5k5SeEbTFrK6ZZqi0Sd3Qs2X/uZkO3M8d6f8phf4BHdGDUvNtOjnYTW1PmsA4t3VGAm0xiJwr5ORbgpgFGdTCz2vJEpD/liVQc3NSFvEB+d2ill1DGd/bDI0W631wammOKWvdFteEXbQpFGv76QznlsJILBXypSGL5BV/F6vm4yfSaK3RUpOcw7q/ruaT/oCknRjtKlEVkQamYO8FheOFzQladuLSEqrYKzEfeskiSAB8th1PUvDzIbHXfOASRuPsFiRg1j9hxBmWOfUIzNVhlCrxNvdETHLxNYZ3VQC2r5XKZGCNVYtSYiptIP+U0kIH8EVKEUs4ACefFyahJxaw2SVG9f7ppk3JGURFB/i9IpJyXwexRqQN4hkXO5VawjkymMHw3i0bb9SAlFsDyaEeDF+PYSENCpc6bKHUShQ7wCrqh60R/AjaT3mjmdjN7L+uY3TOceY4P/Yefk+iAwaDmGgoNX4U+cKfKf6LiZVxGDU7hpOlBoHrndc1Y4bob3abkmpNznpMqIwrdzRNxfNs2z9Hd9kdDppC9P071rLm4oUKuUr9Q7F2ci/VN0uJznPpQ5iNp19XQWV6fgyC4FcIIWmXlc4xfLHhyjXh9z4U6zshX8IJg1/Znq5LOCWoKfRuy4XmG9ErUWNlTc3ODHX/q22jdPh7UC4Neg3VsXQ4qLeRFbTPvc7WxFZm2WZkmS0qOj9tZ6Bgy/v+modD7uMWeUNbs84wq2F/VlL7GEj48fJOdIHNVVyD2fErbik9uTmt95R5aWDkxQTkkUbhtBCYtq1t5U0xEBn+YWExSTtvP01E5v/84/AjK9OT43JWCMUiOrNPk8A5kshb14kxgxb+nBa9LP7trNUbgSd7pqaQwOdTOxHK48YCw3cTmDlC9H43vKhKf4c7A4EJyH3Bw91JAsWwo5G7HtSpjeLZN25VTaNbEVJI3gSCURCSAntaeffJdreoReKOmyH9OUwvbAnacCmoL6/Eykbh/bygMiMIyxMNtVPAPnMJ73bdRKakElqbR1F37FJpy8dsK6x6PcFe93NuTDfqFUyMD+SMa0HDrDyXL142Y3qHmokMUBoKGGNZiTidcU9yR5S1pVZBJIHPfDVVZj8KTPHc0UKIDSzMxpoBD6as6dr8l40cwZ02CibyRqFfwkPzBe1NvnhOFDqfwBvtpRcpt6oBdjVwVZIjCUVPS3PQoLOSwnJewOMt3EdWYnqUA+/evq2YfkIwgatz8LBrazMfazN6Rp8WRDDcafi6lWy4DVUS2BTuKMNoUzXU1IWgeTKkDq1dHj7u7/84fnZFI7a8fS/Y/w7mY1QHjdLIvJcFthWLXepHvZeshYzpv+YrpH9a4CuOIV5HKZq2aWUhhKOU5dt1eiGOv5eGOdpfvGdohxXddu19DomUOZb4leLeq5NM6Sr/LfmhAGgY1ZB7VaVW/6l0kClmtH5HCrRQP7SBrTSEY6I15wBzfZa9pJ+8/WpJfwgKYk5+CtqNM5viLbYIYn+A4LeciwaF+rAdlixvBrvxUXGi7ScydIL23Co+tVPHYHrD21osaTEU8dfwus/xjXK/V2LqNpDqripZcj16cRNcJapxo4R7Q9hDGC9+q0EhHkmqzqPnTa8X37hGui/h6jeOFnO2wDiDKhprL/kjDfIbPg0Uc3EvTa3y9vZDQSIf5YKrP+WEKLPzYHTI9RmW40i0bXMsw1fvkDfwxeKhqNNk3a5FsUDUWQ+Y2HGgvGkLwiRP+OtJRtI+z23WbnJwhWsZ/4W5/wIbHw2tZ/rwZBnm9tL1G7umPGPzOh/NtcYHmJUu8r2IiX0qT/SvMeIph3zIZKYpSNEu7RG4/ip+MEypety/miwOgefqWRfcfCspvMOeph3aL7dThrczsteEV/iB7zN9HD7nxOWFcwaXEcoiRbJZum/z5iayT/kFPxlkWpFXE9aNE6XdzGF/vlzWRIE58vOq2/vZrd4VdawWYi97l9bcJX2EepjeDpzvWF8SOj3DsJYvdsuZ6Khsusn9SaJ3GG2pat9FRqXp7/HUrh9rA9Cbb9LRcntIF+VKpNXzepoVTJQ1mejlW7LGfsyzp8cZ7lgxzeYZzRIdaZj+sWHxGTNJSpQQrhRkWBo7/RXeRv02XOHePdu3XcekWRlw0Td7r7HvciQgHi0kTZo9Kb3bBjHJK6N/+nbnYAKzSzB7ZlEZr2JWK/Ig1GJLF56NBxgttsnnX1kPt0M2sIRLq6QoT83zdfrGpYjp6UUWBE6A+In0UpgBDHeU/hY9is6FMJGxmttEkl668vqZN1/0FSg48QfiOqbUpxjDffH5hsa4ix2Qt0TvY8+a75307vHMdTmBUxc1jMCZn4qOPnu+fpi+0yYra+qcbWCVlbql6GbpSQcjTzZ3B79QZGGE8hFPQIXYgn7o7eAwrBOsGK+6j3YASjlfNYRGuPssGylVLcqZ0yOoOzwBffSUS3ePHwwffIY7o+Ij7gJ1JVTWJCpE9EAnrtsXaknf9oGnPcNMsYhAs0ockNT7CyxcDwSTAJbI07wC8l7Qj/S5PSuMXDmXXRM5hauM2n5C+M9fRQNv8D5ACEWjxeG0MTTUkq+qoop8yGrWiGzNOOckn8tBDF3jt8rqCY9pRHvG+bjCc2eDjYHyaW6roFe013xRH7ityRYAbLx+LN+x5P+QJN5P9JySeOIEonRceA9aL8IDKUQmBnzQyho42eihU0YOzic4RWBRZHdJqud04Q2nMSjoCsOe8e1KkkRdpxwBYwDUnK0OsE7o6NBuhBSZkpEP88gdh4qIl/SfgLDvzo3xZfS4lnEFUpy3ClyigQd5ttbByNhIpxCWIwy/W6cWt+PzyWnM9VafMEqC5TwvKB/Z9Nx/NIneFo7x64IQ7nJYs5oJ1otMevsF+sBd3crIqFgWTlB9rndQbw6N4UJrGkis4tCUdVZI1duqaV0G6F6MvlxfFeraRPFj/LSqFV6pGtV3MZOY5EcqiN0IFtG9e4ZRnyfZceriKGDPWMhregNSGsGrGmAgCF8BjiHnz5mD9aGV+kpVobiaxkShPs2WtLNyrJHWWaZpta5BVzTZb8mhO7a/I5IGljfd6IFvKu9jCMZTZvJTcgVZLRAZ9nyGVsngJs+l2K+fRTzJwKqUGqtoyLRNEf5T1ujZjx8tL60XlUUtifMdGLoVc5NzUopYIeWPlqpnAa8ANkI69IW9WRNoeMvpz6ICPBJQZHaXUA1v/ax+xDXeFsbVRaXE/k74RTkQmyibiNBTq+5F0rLyv/vJVJQdI4IzWuDyOiDrr6zB6zWgJL3QC9BX/i1iGbA6PIuJiNzlVFG4g6952FXZlLM6AewXU1afQ7q2Kq1dCioacm4YYdF6894uvHb+FbZOm5WqViaDpb0FpLj5DU2vaPdb9Omkszq35K9Ex5D+ausLx3XX+mmyQKeJQvyhrquJs1UdYc5tv00xEIAzWf03jmB9vrgpXlQKhvoiORcAAgNbAWhvsyQmKL5W2OdhdTzGMOpWNWTQSZxNwDb+yphvgZ7K1e0FZN05j/jf7cZHQkc1Rff7Gq52NBO1guwtuI04l0A8RdPfdpZcickdF6+8bGEbZMTzvV/QakPklbpECX1wEjcK98v9gLRfLgvKg/PR4aXxCuy7MoMm0W7fn5bLsmaF3BG0+GjhZKnMefbb5MRKUnaF/d4UxlLF+zjPh4w2deecFdf/9i7jNJAU1vu94G0eKDvj9XK2B+47q1UjbvR8JlM7E3F4XrLVoftSvl97llAp6+iyMy5KcBx/9WuvJBBuTyo0e85IJ7wEyimXyIY/S4di4uCyCneihq34J4FRy3JRLn2d5IyZF6Uxaa2qUZCuJxPOAtXChdoyopEoSX0knus2zoSZfIoO9uTRtmr4TNDLE6RdDaQVjfb72HYGgE/dn9PMf1cksdhScduBFGsyzBwNcK53VkmzmR4oIWGOPr4PdGym+5hwvEmcHaGZp1IddTu5O5ZQBv8Zc2aIg67+b3lsHgpT3S/FECuXk7aztUYfoEx42+93u9dRHRu5rl+rnEPQIv6rWHd86G1MoMfTbAG8ctyr98RNU1hqd1xmny73BsOo4lRUCZpB8Tx6WU7N6csjZwHu8quKcSh5lXu1euzlz1t6RFCnZkS26vCi/JSyNbsP7ktwbfZDmGHIVOhvKSAbnoBarA4zHN82dA44wmj32lAwZ7pkO73NO4nszpjPU8QKadJoZDmkbr+T3rDnge4VMfIgPyGdBZeecQvskHZIfU7iMcSd1m26lgrx7pwEMOSCe9jNrC1ghj5aaxX+XgwiIzh+bwqfmYrvltNxoYw15M0O2Tj5bPWv2mLtwLigPejfu88CoK6XiN1AuRJ64yWrFCPTzF632+kXfR96jIrzzYlt4Oh9ml2Xv+M4QTDBsC5VGT+duB7pW3H2zsX3WKSR56XuVdR64N6lxxnadvNNG7qqg36dpORxJz5LHRFz6Wd9/QMZ/XsG3e8nObKBH0Vxumr1ThlqTe5W+8YdcIt7Qh7Gi6/TE5CQd66f+D70VXsfdGU0LMgwhav9ftO3RyDqf6LL7ox5msRp+osLD5ileq4nXk08/UsFx6tmCUPpdAt5o21qcBDo96w/QSeOjJvhVIXFf+vHuM8pbQhR805jj64w79V6jXIdaDRpc+8WxV7MT6beaOu0k7VKwPyv9mi2uyS/S+wuoTudSOmPZKGvvu7Mby/L4W9rszMMAhc6lOYPfE/tl8ysJOes1J6fSFPwlq1OlH/snBzFpVopSUlDWgawrfPOjaKeqgeDeHOXe9SncQM3vsJ8ikQ56Ulq5+zRq+d0pGcfp8knH22oZPn8VIPQg+Wgx47X09eOBov5dvdW9lsX2R535wOCrR+EhiiQKuxtxeqx102JIgSyrn3hDLz2SRPY67Fl+D+9BMZFBHdg/SbsKNLz1YIBCu1ZgPut3Z0stnY+hfR8f0ahT4xhs/q6yViMRp7mK84+ZNIG88XH6bsOtUdH0yx/drxt/DAca2lzTSbCZPbLTX7W0deBPxr86/9fw9g79o13LRg9Zc/blb3Hsf3na5z+P6dBv9lwlfYiG6atS/+QfZyj/PczHsp9gPDVpP+31p8W//2o4xybn//j/SKCCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoLCfzf+BwbcafAuhznHAAAAAElFTkSuQmCC" />
            <Card className={classes.root}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setHover(prev => !prev)}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            ₪{price}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <Typography variant="subtitle1" color="textSecondary">
                            {description}
                        </Typography>
                        {/* <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton> */}
                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={imageSrc}
                    title={title}
                />
                <Collapse in={hover}  >
                    <CardActions style={{ alignItems: 'start' }}>
                        <IconButton >
                            <AddShoppingCartIcon />
                        </IconButton>

                    </CardActions>
                </Collapse>
            </Card>
        </div>
    );
}
export default ProductCard