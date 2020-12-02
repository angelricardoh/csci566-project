#Seq2SeqGAN model

To the baseline LSTM model, we applied GAN architecture and created a new model. We call this model as SeqtoSeq GAN here. With the GAN’s generator and discriminator, we expected that our model generates more plausible future positions, avoiding the blurry predictions with the help of discriminator. Figure1 and Figure2 two shows the architecture of the generator and the discriminator of our Seq2Seq model.

![](https://github.com/deepnewworld/csci566-project/blob/master/src/images/main/GAN1.png)
<div align="center">Figure 1. Generator of Seq2Seq GAN1</div><br/><br/>

![](https://github.com/deepnewworld/csci566-project/blob/master/src/images/main/GAN2.png)
<div align="center">Figure 2. Discriminator of Seq2Seq GAN</div><br/><br/>

As you see the generator’s architecture in Figure1, we firstly extracted latent temporal features from history positions with encoder and decoder. After that, we added noise vectors for the generator and used LSTM and fully connected layers to generate the next 50 trajectories. For the discriminator, we gave the generated trajectories and the target trajectories which is the ground truth to it as input. And we used an LSTM layer to extract latent features and used fully connected layers to distinguish whether our input to a discriminator is forgery or not.


![](https://github.com/deepnewworld/csci566-project/blob/master/src/images/main/GAN3.png)
<div align="center">Figure 3. Generator of Seq2Seq GAN2 (with yaw)</div><br/><br/>
                                    
Other than the generator model we have discussed above, we have implemented a new generator that contains yaw information taking the direction information into our model. As in Figure3, the encoder takes history positions and yaw information as input. We believed that this would improve our model and found out that the Seq2Seq GAN2 has lower MSE test loss than the Seq2Seq GAN1.
<p align="center">
  <img width="40%" src="https://github.com/deepnewworld/csci566-project/blob/master/src/images/main/GAN9.png">
</p><br/><br/>

![](https://github.com/deepnewworld/csci566-project/blob/master/src/images/main/GAN4.png)
<div align="center">Figure 4. Training loss graphs of Seq2Seq GAN2</div><br/><br/>
                           
These are the loss graphs from a Seq2Seq GAN model. In this model, we have used MSE loss for the generator loss and BCE loss for the discriminator. MSE loss function allows a model to learn directly from the target value. As you see from Figure 4, generator loss converges to 0. This is desirable since we use a generator to generate future trajectory. Moreover, validation loss follows similar behavior as training loss, and it shows that our model is not overfitted.
                               
You can find all the variants of Seq2Seq GAN with detailed hyper parameters and the structures in the following table.
![](https://github.com/deepnewworld/csci566-project/blob/master/src/images/main/GAN8.png)
<div align="center">Table 2. All the variant models in Seq2Seq GAN</div>
                        
1 : Train with only history positions         
2 : Train with history positions and history yaw        
V1 : BCE loss function in the generator     
V2 : MSE loss function in the generator         
Vx - 1 : Relu, without Dropout and Batch Norm in the discriminator         
Vx - 2 : LeakyRelu, with Dropout and Batch Norm in the discriminator         
Vx - x - 1 : With learning rate 1e-3       
Vx - x - 2 : With learning rate 5e-3         
Vx - x - 3 : With learning rate 1e-4          

You can see more details about Seq2Seq GAN [here](https://deepnewworld.github.io/csci566-project/#/seq2seqGAN).
