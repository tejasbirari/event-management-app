import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { fetchPaymentDetails } from '../services/redux/paymentInfoAction';
import { LinkIcon } from 'lucide-react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { downloadTicket } from '../services/api/postMethods';
import download from 'downloadjs';

const Transaction = () => {

    const dispatch = useDispatch();

    const { transactions, loading } = useSelector(state => state.payments);

    useEffect(() => {
        const userId = sessionStorage.getItem('USER_ID');
        dispatch(fetchPaymentDetails(userId));
    }, [dispatch]);

    const handleDownload = async(paymentId) => {
        const response = await downloadTicket(paymentId);
        download(response, 'receipt.pdf', 'application/pdf');
    }

  return (
    <>
        <Header>
            <Text>Transaction Details</Text>
        </Header>

        <SkeletonTheme baseColor="rgba(200, 200, 200, 0.2)" highlightColor="#999">
            {transactions && transactions.map((transaction, index) => (
                <>
                <DetailBox 
                    key={transaction.razorpay_payment_id} 
                    isLastChild={index === transactions.length - 1}
                    isFirstChild={index === 0}
                >
                    <Heading>
                        <LinkIcon size={15}/>
                        <Title>{loading ? <Skeleton width={200}/> : transaction.razorpay_payment_id}</Title>
                        <Button>
                            <DownloadButton 
                                onClick={ () => handleDownload(transaction.razorpay_payment_id) } >download</DownloadButton>
                        </Button>
                    </Heading>

                    <Content>Order ID: {loading ? <Skeleton width={200}/> : transaction.razorpay_order_id}</Content>
                    <Row>
                        <Content>Amount: ₹{loading ? <Skeleton width={100}/> : transaction.amount}</Content>
                        <Content>Tickets: {loading ? <Skeleton width={100}/> : transaction.tickets}</Content>
                    </Row>
                </DetailBox>
                </>
            ))}
        </SkeletonTheme>
    </>
  )
}

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-left: 20px;
`;

const Text = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline #444;
`;

const DetailBox = styled.div`
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: ${props => (props.isLastChild ? '0 0 15px 15px' : '0')};
    padding-bottom: ${props => (props.isLastChild ? '20px' : '0')};
    margin-top: ${props => (props.isFirstChild ? '15px' : '0')};

    &:hover{
        background: rgba(130, 82, 170, 0.2);
    }
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media only screen and (max-width: 430px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 17px;
    font-weight: 500;
`;

const Content = styled.div`
    font-size: 13px;
    color: #777;
    margin-left: 22px;
`;

const Row = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const Button = styled.div`
    flex: 1;
    display: flex;
    align-items: right;
    justify-content: right;

`;

const DownloadButton = styled.a`
    border: 1px solid #ac44d8;
    padding: 5px 10px;
    border-radius: 5px;
    background: transparent;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
    font-weight :500;
    
    &:active{
        transform: scale(0.95);
    }
`;

export default Transaction;