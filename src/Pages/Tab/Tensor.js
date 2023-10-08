import React from "react"

import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { Mobile, PC } from "../../MediaQuery"
import { Div } from "../../styles/Div"
import Img from "../../styles/Img"
import { P } from "../../styles/P"
import theme from "../../theme"

const HR = styled.hr`
    width: 15%;
    margin: 0;
`
const MobileHR = styled.hr`
    width: 5%;
    margin: 0;
`

const AbDiv = styled(Div)`
    position: absolute;

    bottom: 0px;
    right: 10px;
`

const ReDiv = styled(Div)`
    position: relative;
`

const Tensor = () => {
    const navigate = useNavigate()
    const moveContact = () => {
        navigate("/contact")
    }

    return (
        <>
            <PC>
                <Div width="100%" display="flex">
                    <Div $padding="30px" $margin=" 0 0 50px 0" $backgroundColor="grey1">
                        <P fontSize="lg" $center>
                            See our innovative cost-efficient performance over various tensor operations.
                        </P>
                    </Div>
                </Div>

                <Div width="100%" display="flex">
                    <Div
                        width="20%"
                        display="flex"
                        direction="column"
                        $borderRadius="100px"
                        $backgroundColor="blue"
                        $padding="10px 50px"
                    >
                        <Div display="flex">
                            <P fontWeight="800" $lineHeight="2">
                                Latency
                            </P>
                        </Div>
                        <Div display="flex">
                            <P fontWeight="800" fontSize="xl">
                                10X
                            </P>
                        </Div>
                    </Div>
                    <HR />
                    <Div
                        width="20%"
                        display="flex"
                        direction="column"
                        $borderRadius="20px"
                        $backgroundColor="redlayer1"
                        $padding="30px 50px"
                    >
                        <Div display="flex">
                            <P fontWeight="800" fontSize="xl">
                                Metep
                            </P>
                        </Div>
                    </Div>
                    <HR />
                    <Div
                        width="20%"
                        display="flex"
                        direction="column"
                        $borderRadius="100px"
                        $backgroundColor="blue"
                        $padding="10px 50px"
                    >
                        <Div display="flex">
                            <P fontWeight="800" $lineHeight="2">
                                Memory
                            </P>
                        </Div>
                        <Div display="flex">
                            <P fontWeight="800" fontSize="xl">
                                3X
                            </P>
                        </Div>
                    </Div>
                </Div>

                <Div display="flex" width="100%" $padding="10px" $margin="50px 0 0 0">
                    <Div height="600px" display="flex" $justifyContent="space-around" direction="column">
                        <Div width="100%">
                            <P fontWeight={800}>* Less is better</P>
                        </Div>
                        <Div display="flex" width="100">
                            <Div height="500px" display="flex">
                                <Img src="/images/tensor.png" />
                            </Div>
                            <Div width="500px" height="500px">
                                <Div width="100%">
                                    <Div width="100%" display="flex" $margin="0 0 10px 0">
                                        <P fontSize="lg" $center color="bk1">
                                            S/W Frameworks
                                        </P>
                                    </Div>
                                    <Div width="100%" $border={`1px solid ${theme.color.bk1}`} display="flex">
                                        <Div
                                            width="150px"
                                            $padding="10px"
                                            display="flex"
                                            $justifyContent="space-evenly"
                                        >
                                            <Div width="100%" display="flex" $justifyContent="end">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        Armadillo
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="end">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        Framework(A)
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="end">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        Framework(B)
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="end">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        Metep
                                                    </P>
                                                </Div>
                                            </Div>
                                        </Div>
                                        <Div
                                            width="250px"
                                            $padding="10px"
                                            display="flex"
                                            $justifyContent="space-evenly"
                                        >
                                            <Div width="100%" display="flex" $justifyContent="start">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        C++ (Open-source)
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="start">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        Commercial software
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="start">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        Python (OS framework)
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="start">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        C++ (Ours)
                                                    </P>
                                                </Div>
                                            </Div>
                                        </Div>
                                    </Div>

                                    <Div width="100%" display="flex" $margin="10px 0">
                                        <P fontSize="lg" $center color="bk1">
                                            Tensor Operations
                                        </P>
                                    </Div>
                                    <Div width="100%" $border={`1px solid ${theme.color.bk1}`} display="flex">
                                        <Div
                                            width="100px"
                                            $padding="10px"
                                            display="flex"
                                            $justifyContent="space-evenly"
                                        >
                                            <Div width="100%" display="flex" $justifyContent="end">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        EOP
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="end">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        MOPS
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="end">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        SMA
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="end">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        MPA
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="end">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        RND
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="end">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        KNN
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="end">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        LR
                                                    </P>
                                                </Div>
                                            </Div>
                                        </Div>
                                        <Div
                                            width="300px"
                                            $padding="10px"
                                            display="flex"
                                            $justifyContent="space-evenly"
                                        >
                                            <Div width="100%" display="flex" $justifyContent="start">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        Element-wise tensor operation
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="start">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        Composite tensor operation
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="start">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        Sub-tensor access
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="start">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        Matrix multiplication
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="start">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        Random tensor generation
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="start">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        K-nearest neighbor classfication
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div width="100%" display="flex" $justifyContent="start">
                                                <Div>
                                                    <P fontSize="sm" $lineHeight="1.6" color="bk1">
                                                        Logistic regression learning
                                                    </P>
                                                </Div>
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>

                <ReDiv width="100%" $margin="20px 0">
                    <Div>
                        <P fontSize="sm" $lineHeight="1.6">
                            <i>
                                * Benchmark Environment: Intel Xeon E-2620v4 2 sockets (multi-cores CPUs-based
                                computation)
                                <br />
                                * Benchmark Numerical Precision: fp32
                                <br />
                            </i>
                        </P>
                        <AbDiv>
                            <P fontSize="sm" $lineHeight="1.6">
                                <i>(*Results can differ from other execution environments)</i>
                            </P>
                        </AbDiv>
                    </Div>
                </ReDiv>

                <Div width="100%" display="flex">
                    <Div
                        $backgroundColor="redlayer1"
                        $margin="50px 0"
                        $padding="20px 30px"
                        $borderRadius="10px"
                        onClick={moveContact}
                        $pointer
                    >
                        <P fontSize="lg" fontWeight={700}>
                            Request more detailed technical article
                        </P>
                    </Div>
                </Div>
            </PC>

            <Mobile>
                <Div width="100%" display="flex">
                    <Div $padding="10px" $backgroundColor="grey1">
                        <P fontSize="sm" $center>
                            See our innovative cost-efficient performance over various tensor operations.
                        </P>
                    </Div>
                </Div>
                <Div width="100%" display="flex">
                    <Div
                        width="100px"
                        display="flex"
                        direction="column"
                        $borderRadius="100px"
                        $backgroundColor="blue"
                        $padding="10px "
                    >
                        <Div display="flex">
                            <P fontSize="xs" fontWeight="800">
                                Latency
                            </P>
                        </Div>
                        <Div display="flex">
                            <P fontSize="xxs" fontWeight="800">
                                10X
                            </P>
                        </Div>
                    </Div>
                    <MobileHR />
                    <Div
                        width="100px"
                        display="flex"
                        direction="column"
                        $borderRadius="5px"
                        $backgroundColor="redlayer1"
                        $padding="10px"
                    >
                        <Div display="flex">
                            <P fontWeight="800" fontSize="xs">
                                Metep
                            </P>
                        </Div>
                    </Div>
                    <MobileHR />
                    <Div
                        width="100px"
                        display="flex"
                        direction="column"
                        $borderRadius="100px"
                        $backgroundColor="blue"
                        $padding="10px"
                    >
                        <Div display="flex">
                            <P fontWeight="800" fontSize="xs">
                                Memory
                            </P>
                        </Div>
                        <Div display="flex">
                            <P fontWeight="800" fontSize="xxs">
                                3X
                            </P>
                        </Div>
                    </Div>

                    <Div display="flex" width="100%" $padding="10px" $margin="50px 0 0 0">
                        <Div display="flex" $justifyContent="space-around" direction="column">
                            <Div width="100%">
                                <P fontWeight={800} fontSize="xxs">
                                    * Less is better
                                </P>
                            </Div>
                            <Div>
                                <Div height="200px" display="flex">
                                    <Img src="/images/tensor.png" />
                                </Div>
                                <Div>
                                    <Div width="100%">
                                        <Div width="100%" display="flex" $margin="0 0 10px 0">
                                            <P fontSize="sm" $center>
                                                S/W Frameworks
                                            </P>
                                        </Div>
                                        <Div width="100%" $border="1px solid black" display="flex">
                                            <Div
                                                width="100px"
                                                $padding="5px"
                                                display="flex"
                                                $justifyContent="space-evenly"
                                            >
                                                <Div width="100%" display="flex" $justifyContent="end">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            Armadillo
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="end">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            Framework(A)
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="end">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            Framework(B)
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="end">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            Metep
                                                        </P>
                                                    </Div>
                                                </Div>
                                            </Div>
                                            <Div
                                                width="200px"
                                                $padding="5px"
                                                display="flex"
                                                $justifyContent="space-evenly"
                                            >
                                                <Div width="100%" display="flex" $justifyContent="start">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            C++ (Open-source)
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="start">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            Commercial software
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="start">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            Python (OS framework)
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="start">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            C++ (Ours)
                                                        </P>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </Div>

                                        <Div width="100%" display="flex" $margin="10px 0">
                                            <P fontSize="sm" $center>
                                                Tensor Operations
                                            </P>
                                        </Div>
                                        <Div width="100%" $border="1px solid black" display="flex">
                                            <Div
                                                width="100px"
                                                $padding="5px"
                                                display="flex"
                                                $justifyContent="space-evenly"
                                            >
                                                <Div width="100%" display="flex" $justifyContent="end">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            EOP
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="end">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            MOPS
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="end">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            SMA
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="end">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            MPA
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="end">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            RND
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="end">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            KNN
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="end">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            LR
                                                        </P>
                                                    </Div>
                                                </Div>
                                            </Div>
                                            <Div
                                                width="200px"
                                                $padding="5px"
                                                display="flex"
                                                $justifyContent="space-evenly"
                                            >
                                                <Div width="100%" display="flex" $justifyContent="start">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            Element-wise tensor operation
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="start">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            Composite tensor operation
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="start">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            Sub-tensor access
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="start">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            Matrix multiplication
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="start">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            Random tensor generation
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="start">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            K-nearest neighbor classfication
                                                        </P>
                                                    </Div>
                                                </Div>
                                                <Div width="100%" display="flex" $justifyContent="start">
                                                    <Div>
                                                        <P fontSize="xxs" $lineHeight="1.6">
                                                            Logistic regression learning
                                                        </P>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div width="100%" $margin="10px 0">
                            <Div>
                                <P $lineHeight="1.6" fontSize="xxs">
                                    <i>
                                        * Benchmark Environment: Intel Xeon E-2620v4 2 sockets (multi-cores CPUs-based
                                        computation)
                                        <br />
                                        * Benchmark Numerical Precision: fp32
                                        <br />
                                    </i>
                                </P>
                                <Div>
                                    <P $lineHeight="1.6" fontSize="xxs">
                                        <i>(*Results can differ from other execution environments)</i>
                                    </P>
                                </Div>
                            </Div>
                        </Div>

                        <Div width="100%" display="flex">
                            <Div
                                $backgroundColor="redlayer1"
                                $margin="50px 0"
                                $padding="20px 30px"
                                $borderRadius="10px"
                                onClick={moveContact}
                                $pointer
                            >
                                <P fontSize="sm" $center fontWeight={700}>
                                    Request more detailed technical article
                                </P>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Mobile>
        </>
    )
}

export default Tensor