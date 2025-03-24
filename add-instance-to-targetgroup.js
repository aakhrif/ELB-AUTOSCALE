const AWS = require('aws-sdk');


AWS.config.update({
  region: 'us-west-2',
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
});

const elbv2 = new AWS.ELBv2();

// Example: Add an EC2 instance to a target group
async function registerInstanceInTargetGroup() {
  const targetGroupArn = 'TARGET_GROUP_ARN'; // Replace with your target group ARN
  const instanceId = 'i-xxxxxxxxxxxxxxxxx'; // Replace with your EC2 instance ID

  const params = {
    TargetGroupArn: targetGroupArn,
    Targets: [
      {
        Id: instanceId,
        Port: 80, 
      },
    ],
  };

  try {
    const data = await elbv2.registerTargets(params).promise();
    console.log('Successfully added instance:', data);
  } catch (err) {
    console.error('Error adding instance:', err);
  }
}

registerInstanceInTargetGroup();
